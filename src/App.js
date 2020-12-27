import React, { useState, useEffect } from "react";

import aws_exports from "./aws-exports";

import Button from "@material-ui/core/Button";
import { DataGrid } from "@material-ui/data-grid";

import logo from "./logo.jpeg";
import "./App.css";

import { Amplify, API, Storage } from "aws-amplify";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { listBoxs } from "./graphql/queries";
import {
  createImage as createImageMutation,
  updateBox as updateBoxMutation,
} from "./graphql/mutations";

import { v4 as uuid } from "uuid";

Amplify.configure(aws_exports);

const initialFormState = {
  id: "0",
  label: "",
  src: "",
  altText: "",
  userID: "1",
};

function App() {
  const [boxes, setBoxes] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchBoxes();
  }, []);

  async function upload_to_s3(s3_path, file) {
    const { key } = await Storage.put(s3_path, file);
    return key;
  }
  function get_file_name(file_name) {
    return new Date().toISOString() + " - " + uuid() + "-" + file_name;
  }

  async function onChange(e) {
    if (!e.target.files[0]) return;
    const file = e.target.files[0];
    setFormData({ ...formData, image: file.name, file: file });
    fetchBoxes();
  }

  async function fetchBoxes() {
    const apiData = await API.graphql({
      query: listBoxs,
      variables: {
        limit: 1000,
      },
    });
    // console.log({ apiData })

    const boxes = apiData.data.listBoxs.items;
    await Promise.all(
      boxes.map(async (box) => {
        const img =
          box.imageID && box.image && box.image.src
            ? box.image.src
            : "noimage.png";
        const image = await Storage.get(img);
        box.main_image = image;
        return box;
      })
    );
    setBoxes(apiData.data.listBoxs.items);
  }

  async function addPhoto(box_id) {
    if (!formData.image || !formData.label) {
      alert("adding photos: Missing required params");
      return;
    }

    // upload to s3
    console.log("Uploading photos for Box: " + box_id);
    const s3_path = get_file_name(formData.image);
    await upload_to_s3(s3_path, formData.file);

    // add image
    const new_image_id = box_id + "-" + formData.label + "-" + uuid();
    const image_input = {
      id: new_image_id,
      src: s3_path,
      label: formData.label,
      altText: formData.label,
      userID: "1", // TODO: replace with logged-in user
      isActive: true,
      dateAdded: new Date().toISOString(),
    };

    const newImage = await API.graphql({
      query: createImageMutation,
      variables: { input: image_input },
    });

    console.log("new image added:", newImage);
    if (newImage) {
      const box_input = {
        id: box_id,
        imageID: new_image_id,
      };

      const updateBox = await API.graphql({
        query: updateBoxMutation,
        variables: { input: box_input },
      });

      console.log("Box updated:", updateBox);

      console.log("Fetching image from s3:", updateBox);
      const image = await Storage.get(s3_path);
      formData.image = image;

      console.log("Fetching image from s3:", updateBox);
    }
    fetchBoxes();
    setFormData(initialFormState);
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
      renderCell: (params) => <span>{params.value ? params.value.name : "Unknown Org"}</span>,
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
    // {
    //   field: "imageID",
    //   headerName: "Photo ID",
    //   width: 400,
    //   renderCell: (params) => (params.value.src!== undefined ? params.value.src  : ""),
    // },
    {
      field: "main_image",
      headerName: "Box Photo",
      width: 150,
      // TODO: Display thumbnail
      renderCell: (params) => (
        <div>
          <a href={params.value} target="_blank" rel="noopener noreferrer">
            <img alt={params.value} src={params.value} height="30" width="30" />
          </a>
        </div>
      ),
    },
    {
      field: "id",
      headerName: " ",
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
        HAA Box Tracker {"- " + process.env.REACT_APP_BUILD_ENV}
      </h1>
      <hr />
      <div style={{ height: 450, width: "90%" }}>
        <DataGrid
          rows={boxes}
          columns={columns}
          pageSize={6}
          checkboxSelection={false}
        />
      </div>
      <hr />
      <div
        style={{
          justifyContent: "center",
          alignItems: "left",
        }}
      >
        <br />
        Box Photo Label: &nbsp;
        <input
          onChange={(e) => setFormData({ ...formData, label: e.target.value })}
          placeholder="Please enter Box Photo Label"
          value={formData.label}
          maxLength="100"
          size="35"
        />
        &nbsp;
        <input type="file" onChange={onChange} />
      </div>
      <br />

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
