import React, { useState, useEffect } from "react";

import aws_exports from "./aws-exports";

import { makeStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import Image from "material-ui-image";
import { DataGrid } from "@material-ui/data-grid";

// import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';

import logo from "./logo.jpeg";
import "./App.css";

import { Amplify, API, Storage } from "aws-amplify";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { listBoxs } from "./graphql/queries";
import { createImage as createImageMutation } from "./graphql/mutations";

import {v4 as uuid} from 'uuid';

Amplify.configure(aws_exports);

const initialFormState = { id: "0", label: "", src: "", altText: "", userID: "0" };

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function App() {
  const [boxes, setBoxes] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchBoxes();
  }, []);

  async function onChange(e) {
    if (!e.target.files[0]) return;
    const file = e.target.files[0];
    const { key }  = await Storage.put(file.name, file);
    setFormData({ ...formData, image: file.name, s3_path: 's3://haaapistorage01542-dev/public/' + key });
    console.log('S3 Object key', key)
    fetchBoxes();
  }

  async function fetchBoxes() {
    const apiData = await API.graphql({
      query: listBoxs,
      variables: {
        limit: 5,
      },
    });
    console.log({ apiData })

    const boxes = apiData.data.listBoxs.items;
    await Promise.all(
      boxes.map(async (box) => {
        if (box.imageID) {
          const image = await Storage.get(box.image.src);
          box.main_image = image;
        }
        return box;
      })
    );
    setBoxes(apiData.data.listBoxs.items);
  }

  async function addPhoto(box_qr_code) {
    console.log("Future: Uploading photos for Box: " + box_qr_code);
    if (!formData.id || !formData.label) return;
    formData.label = formData.label || formData.image
    formData.src = formData.s3_path
    formData.id = formData.label + " - " + uuid()

    const image_input = {
      "id": formData.id,
      "src": formData.src,
      "label": formData.label,
    }      
    console.log('image_input: ', image_input)
    const newImage =  await API.graphql({
      query: createImageMutation,
      variables: { input: image_input }
      });
    // console.log("new image:", newImage)
    // if (formData.image) {
    //   const image = await Storage.get(formData.image);
    //   formData.image = image;
    // }
    // setBoxes([...boxes, formData]);
    // setFormData(initialFormState);
  }

  const YearOfDate = {
    type: "datetime",
    valueFormatter: (params) => new Date(params.value).getFullYear(),
  };

  const columns = [
    { field: "barCode", headerName: "Box", width: 200 },
    { field: "contents", headerName: "Contents", width: 230 },
    {
      field: "org",
      headerName: "Org Name",
      width: 150,
      renderCell: (params) => <span>{params.value.name}</span>,
    },
    { field: "status", headerName: "Status", width: 130 },
    {
      field: "createdAt",
      headerName: "Year",
      width: 80,
      ...YearOfDate,
    },
    {
      field: "updatedAt",
      headerName: "Last Updated at",
      type: "datetime",
      width: 250,
    },
    {
      field: "main_image",
      headerName: "Box Photo",
      width: 200,
      renderCell: (params) => (
        <div>
          <Image src={params.value} disableError={true} />
        </div>
      ),
    },
    {
      field: "id",
      headerName: "Upload Photo",
      width: 200,
      renderCell: (params) => (
        <div>
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ marginLeft: 16 }}
            onClick={() => {
              addPhoto(params.value);
            }}
          >
            Upload Photo
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="App">
      <h1>
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          style={{ height: 200, width: 200 }}
        />
        HAA Box Tracker {" "}
        {"- " + process.env.REACT_APP_BUILD_ENV}
      </h1>

      <div
        style={{
          justifyContent: "center",
          alignItems: "left",
        }}
      >
        <br />
        Image Label: &nbsp;
        <input
          onChange={(e) => setFormData({ ...formData, label: e.target.value })}
          placeholder="Image Label"
          value={formData.label}
          maxLength="100"
          size="35"
        />
        {/* <br />
        Source URL: &nbsp;
        <input
          onChange={(e) => setFormData({ ...formData, url: e.target.value })}
          placeholder="Source URL"
          value={formData.url}
          size="35"
        /> */}
        <br />
        &nbsp;
        <input type="file" onChange={onChange} />
      </div>
      <hr />

      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={boxes}
          columns={columns}
          pageSize={3}
          checkboxSelection={false}
        />
      </div>

      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App, {
  includeGreetings: true,
  signUpConfig: {
    hiddenDefaults: ["phone_number"],
  },
});
