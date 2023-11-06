import './App.css';

function Apii() {
  const apiUrl =
    'https://5yiek6g5g0.execute-api.ap-south-1.amazonaws.com/Prod/api/engt/getAllPlayList';

  // Define the headers as specified by the API documentation
  const headers = {
    'X-Api-Key': 'MXqO3cDcr492OTPGZZAot7akPvLmfKbA4bKt5Ryr',
    'X-Tenant-Key': 'INDU140923',
  };

  // Define the request body
  const requestBody = JSON.stringify({ Content_Type: 2 }); // Assuming the request body should be in JSON format

  // Define the request options, including the method, headers, and body
  const requestOptions = {
    method: 'POST', // Use POST method for creating resources
    headers: headers,
    body: requestBody,
  };

  fetch(apiUrl, requestOptions)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error('API request failed');
      }
    })
    .then((response) => {
      // Extract the 'data' array from the response object
      const data = response.data;

      if (Array.isArray(data)) {
        data.forEach((item) => {
          const { Name, Post_Ids } = item;
          // console.log(`Name: ${item.Name}`);
          // console.log(`postIDs:${item.Post_Ids}`);
          console.log(`Name: ${Name}, Post_Ids: ${Post_Ids}`);
        });
      } else {
        console.error(
          'Data is not an array. Check the API response structure.'
        );
      }

      console.log(data);
    })
    .catch((error) => {
      // Handle errors, including the 400 Bad Request error
      console.error(error);
    });

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Define the URL for the second API call
  const secondApiUrl =
    'https://5yiek6g5g0.execute-api.ap-south-1.amazonaws.com/Prod/api/engt/getfeeds_v1';

  // Define the request body for the second API call
  const secondRequestBody = JSON.stringify({
    Index: 1,
    ContentType: [2],
    IsTagged: false,
    URL: '',
  });

  // Define the headers for the second API call
  const secondApiHeaders = {
    'X-Api-Key': 'MXqO3cDcr492OTPGZZAot7akPvLmfKbA4bKt5Ryr',
    'X-Tenant-Key': 'INDU140923',
  };

  // Define the request options for the second API call
  const secondRequestOptions = {
    method: 'POST',
    headers: secondApiHeaders,
    body: secondRequestBody,
  };

  // Make the second API request using the Fetch API
  fetch(secondApiUrl, secondRequestOptions)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error('Second API request failed');
      }
    })
    .then((response) => {
      // Handle the response of the second API call

      console.log(response);

      const feeds = response.data.Feeds;
      const url = response.data.Feeds[0].Contents[0].Url;

      console.log(url);

      //Check if 'Feeds' is an array and not empty
      if (Array.isArray(feeds) && feeds.length > 0) {
        feeds.forEach((feed) => {
          const thumbnailTitle = feed.Thumbnail_Title;
          const thumbnailURL = feed.Thumbnail_URL;
          const associatedProductList = feed.AssociatedProductList;

          if (
            Array.isArray(associatedProductList) &&
            associatedProductList.length > 0
          ) {
            console.log(
              `Number of Associated Products: ${associatedProductList.length}`
            );
            associatedProductList.forEach((product) => {
              const productName = product.productdisplayName;
              const productURL = product.productURL;
              console.log(`Product Name: ${productName}`);
              console.log(`Product URL: ${productURL}`);
            });
          } else {
            console.log('No Associated Products in this feed.');
          }

          console.log(`Thumbnail Title: ${thumbnailTitle}`);
          console.log(`Thumbnail URL: ${thumbnailURL}`);
        });
      } else {
        console.error('No Feeds data available in the API response.');
      }
    });
}
//////////////////////////////////

export default Apii;
