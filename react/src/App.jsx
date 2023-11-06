// import { useEffect, useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import React from 'react';
import DisplayFeeds from './DisplayFeeds';
import ProductNamesDisplay from './ProductNamesDisplay';
import Products from './Products';
import Apii from './apii';

const App = () => {
 const api = 'https://5yiek6g5g0.execute-api.ap-south-1.amazonaws.com/Prod/api/engt/getAllPlayList'
  const headerData = { method:'POST',
  headers:{
    'X-Api-Key': 'MXqO3cDcr492OTPGZZAot7akPvLmfKbA4bKt5Ryr',
        'X-Tenant-Key': 'INDU140923',
  },
  body: JSON.stringify({Content_Type:2}),
}

async function fetchData() {
  try {
    const res = await fetch(api, headerData ) 
    if (res.status !== 200) {
      throw new Error('Failed to load data');
    }

    const firstApiData = res.json(); 

  } catch (error) {
    
  }
}

  return (
    <div>
      {/* <DisplayFeeds /> */}
      <Apii />
      {/* <ProductNamesDisplay /> */}
      {/* <Products /> */}
    </div>
  );
};

export default App;
// Make the API request using the Fetch API
// fetch(apiUrl, requestOptions)
//   .then((response) => {
//     if (response.status === 200) {
//       return response.json();
//     } else {
//       throw new Error('API request failed');
//     }
//   })
//   .then((data) => {
//     if (Array.isArray(data)) {
//       data.forEach((item) => {
//         if (item.Name) {
//           console.log(`Name: ${item.Name}`);
//         }
//       });
//     } else {
//       console.error(
//         'Data is not an array. Check the API response structure.'
//       );
//     }

//     console.log(data);
//   })
//   .catch((error) => {
//     // Handle errors, including the 400 Bad Request error
//     console.error(error);
//   });
