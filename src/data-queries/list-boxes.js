const axios = require("axios")

 // set graphQL URL
const url = process.env.API_HAAAPI_GRAPHQLAPIENDPOINTOUTPUT
// set graphQL API Key
const api_key = process.env.API_HAAAPI_GRAPHQLAPIKEYOUTPUT

const gql_active_boxes = `
query AllActiveBoxes {
    listBoxs(filter: {isActive: {eq: true}}) {
      items {
        id
        isActive
        status
        title
        notes
        boxCategoryID
        locations {
          items {
            boxID
            boxStatus
            destinationLocationInfo {
              id
              isActive
              latitude
              longitude
              locationLabel
              notes
              plusCode
              tags
            }
            isActive
            isFinal
            isFlagged
            scannedByUserID
            scanDateTime
            notes
            trackingInfoID
          }
        }
        isActive
        orgID
        qrCode
        size
        shipmentID
      }
    }
  }
  
`  

gql_query = gql_active_boxes

axios({
    url: url,
    headers: {
        'Access-Control-Allow-Origin': '*',        
        'x-api-key': api_key
      },
    method: 'post',
    data: {
      query: gql_query
    }
  }).then((result) => {
    console.log(JSON.stringify(result.data,null,2))
  })
  .catch((error) => {
    console.error(error);
  });
