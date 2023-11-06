// // import React, { useState, useEffect } from 'react';

// // const DisplayFeeds = () => {
// //   const [feedsData, setFeedsData] = useState(null);

// //   useEffect(() => {
// //     const secondApiUrl =
// //       'https://5yiek6g5g0.execute-api.ap-south-1.amazonaws.com/Prod/api/engt/getfeeds_v1';

// //     // Define the request body for the second API call
// //     const secondRequestBody = JSON.stringify({
// //       Index: 1,
// //       ContentType: [2],
// //       IsTagged: false,
// //       URL: '',
// //     });

// //     // Define the headers for the second API call
// //     const secondApiHeaders = {
// //       'X-Api-Key': 'MXqO3cDcr492OTPGZZAot7akPvLmfKbA4bKt5Ryr',
// //       'X-Tenant-Key': 'INDU140923',
// //     };

// //     // Define the request options for the second API call
// //     const secondRequestOptions = {
// //       method: 'POST',
// //       headers: secondApiHeaders,
// //       body: secondRequestBody,
// //     };

// //     // Make the second API request using the Fetch API
// //     fetch(secondApiUrl, secondRequestOptions)
// //       .then((response) => {
// //         if (response.status === 200) {
// //           return response.json();
// //         } else {
// //           throw new Error('Second API request failed');
// //         }
// //       })
// //       .then((response) => {
// //         // Handle the response of the second API call
// //         setFeedsData(response);
// //         console.log(response);

// //         const feeds = response.data.Feeds;

// //         //Check if 'Feeds' is an array and not empty
// //         if (Array.isArray(feeds) && feeds.length > 0) {
// //           feeds.forEach((feed) => {
// //             const thumbnailTitle = feed.Thumbnail_Title;
// //             const thumbnailURL = feed.Thumbnail_URL;
// //             const associatedProductList = feed.AssociatedProductList;

// //             if (
// //               Array.isArray(associatedProductList) &&
// //               associatedProductList.length > 0
// //             ) {
// //               console.log(
// //                 `Number of Associated Products: ${associatedProductList.length}`
// //               );
// //               associatedProductList.forEach((product) => {
// //                 const productName = product.productdisplayName;
// //                 const productURL = product.productURL;
// //                 console.log(`Product Name: ${productName}`);
// //                 console.log(`Product URL: ${productURL}`);
// //               });
// //             } else {
// //               console.log('No Associated Products in this feed.');
// //             }

// //             console.log(`Thumbnail Title: ${thumbnailTitle}`);
// //             console.log(`Thumbnail URL: ${thumbnailURL}`);
// //           });
// //         } else {
// //           console.error('No Feeds data available in the API response.');
// //         }
// //       });
// //   }, []); // Empty dependency array means this effect runs once, similar to componentDidMount

// //   if (!feedsData) {
// //     return <div>Loading...</div>;
// //   }

// //   const feeds = feedsData.data.Feeds;

// //   if (!feeds) {
// //     return <div>No Feeds data available in the API response.</div>;
// //   }

// //   return (
// //     <div>
// //       {feeds.map((feed, index) => (
// //         <div key={index}>
// //           <h3>Feed {index + 1}</h3>
// //           <div>
// //             <h4>
// //               Number of Associated Products: {feed.AssociatedProductList.length}
// //             </h4>
// //             <ul>
// //               {feed.AssociatedProductList.map((product, productIndex) => (
// //                 <li key={productIndex}>
// //                   <h5>Product Name: {product.productdisplayName}</h5>
// //                   <p>
// //                     Product URL:{' '}
// //                     <a
// //                       href={product.productURL}
// //                       target="_blank"
// //                       rel="noopener noreferrer"
// //                     >
// //                       {product.productURL}
// //                     </a>
// //                   </p>
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>
// //           <h4>Thumbnail Title: {feed.Thumbnail_Title}</h4>
// //           <p>Thumbnail URL: {feed.Thumbnail_URL}</p>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default DisplayFeeds;

// import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import './App.css';

// const FeedCard = ({ feed }) => (
//   <div className="feed-card">
//     <video width="300" height="400" style={{ opacity: '0.5' }}>
//       <source src={feed.Thumbnail_URL} type="video/mp4" />
//       Your browser does not support the video tag.
//     </video>
//     <h4>{feed.Thumbnail_Title}</h4>
//     <p>
//       Products:{' '}
//       {feed.AssociatedProductList ? feed.AssociatedProductList.length : 0}
//     </p>
//   </div>
// );

// FeedCard.propTypes = {
//   feed: PropTypes.shape({
//     Thumbnail_URL: PropTypes.string.isRequired,
//     Thumbnail_Title: PropTypes.string.isRequired,
//     AssociatedProductList: PropTypes.array,
//   }).isRequired,
// };

// const DisplayFeeds = () => {
//   const [feedsData, setFeedsData] = useState(null);

//   const fetchData = async () => {
//     const secondApiUrl =
//       'https://5yiek6g5g0.execute-api.ap-south-1.amazonaws.com/Prod/api/engt/getfeeds_v1';

//     const secondRequestBody = JSON.stringify({
//       Index: 1,
//       ContentType: [2],
//       IsTagged: false,
//       URL: '',
//     });

//     const secondApiHeaders = {
//       'X-Api-Key': 'MXqO3cDcr492OTPGZZAot7akPvLmfKbA4bKt5Ryr',
//       'X-Tenant-Key': 'INDU140923',
//     };

//     const secondRequestOptions = {
//       method: 'POST',
//       headers: secondApiHeaders,
//       body: secondRequestBody,
//     };

//     try {
//       const response = await fetch(secondApiUrl, secondRequestOptions);
//       if (response.status === 200) {
//         const responseData = await response.json();
//         setFeedsData(responseData);
//       } else {
//         throw new Error('Second API request failed');
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []); // Empty dependency array means this effect runs once, similar to componentDidMount

//   const apiUrl =
//     'https://5yiek6g5g0.execute-api.ap-south-1.amazonaws.com/Prod/api/engt/getAllPlayList';

//   // Define the headers as specified by the API documentation
//   const headers = {
//     'X-Api-Key': 'MXqO3cDcr492OTPGZZAot7akPvLmfKbA4bKt5Ryr',
//     'X-Tenant-Key': 'INDU140923',
//   };

//   // Define the request body
//   const requestBody = JSON.stringify({ Content_Type: 2 }); // Assuming the request body should be in JSON format

//   // Define the request options, including the method, headers, and body
//   const requestOptions = {
//     method: 'POST', // Use POST method for creating resources
//     headers: headers,
//     body: requestBody,
//   };

//   fetch(apiUrl, requestOptions)
//     .then((response) => {
//       if (response.status === 200) {
//         return response.json();
//       } else {
//         throw new Error('API request failed');
//       }
//     })
//     .then((response) => {
//       // Extract the 'data' array from the response object
//       const data = response.data;

//       if (Array.isArray(data)) {
//         data.forEach((item) => {
//           const { Name, Post_Ids } = item;
//           // console.log(`Name: ${item.Name}`);
//           // console.log(`postIDs:${item.Post_Ids}`);
//           console.log(`Name: ${Name}, Post_Ids: ${Post_Ids}`);
//         });
//       } else {
//         console.error(
//           'Data is not an array. Check the API response structure.'
//         );
//       }

//       console.log(data);
//     })
//     .catch((error) => {
//       // Handle errors, including the 400 Bad Request error
//       console.error(error);
//     });

//   if (!feedsData) {
//     return <div>Loading...</div>;
//   }

//   // const feeds = feedsData.data.Feeds;

//   // if (!feeds) {
//   //   return <div>No Feeds data available in the API response.</div>;
//   // }

//   return (
//     // <div>
//     //   {feedsData.data.Feeds.map((feed, index) => (
//     //     <div key={index}>
//     //       <h3>Product {index + 1}</h3>
//     //       <div>
//     //         <h4>
//     //           Number of Associated Products:{' '}
//     //           {feed.AssociatedProductList
//     //             ? feed.AssociatedProductList.length
//     //             : 0}
//     //         </h4>
//     //         <ul>
//     //           {feed.AssociatedProductList &&
//     //             feed.AssociatedProductList.length > 0 &&
//     //             feed.AssociatedProductList.map((product, productIndex) => (
//     //               <li key={productIndex}>
//     //                 <h5>Product Name: {product.productdisplayName}</h5>
//     //                 <p>
//     //                   Product URL:{' '}
//     //                   <a
//     //                     href={product.productURL}
//     //                     target="_blank"
//     //                     rel="noopener noreferrer"
//     //                   >
//     //                     {product.productURL}
//     //                   </a>
//     //                 </p>
//     //               </li>
//     //             ))}
//     //         </ul>
//     //       </div>
//     //       <h4>Thumbnail Title: {feed.Thumbnail_Title}</h4>
//     //       <video controls width="300" height="auto">
//     //         <source src={feed.Thumbnail_URL} type="video/mp4" />
//     //         Your browser does not support the video tag.
//     //       </video>
//     //       {/* <p>Thumbnail URL: {feed.Thumbnail_URL}</p> */}
//     //       {/* <img src={feed.Thumbnail_URL} alt={`Thumbnail for ${feed.Thumbnail_Title}`} /> */}
//     //     </div>
//     //   ))}
//     // </div>
//     <div>
//       {feedsData.data.Feeds.map((feed, index) => (
//         <FeedCard key={index} feed={feed} />
//       ))}
//     </div>
//   );
// };

// export default DisplayFeeds;
import React, { useEffect, useState } from 'react';

const Card = ({ feed }) => (
  <div className="feed-card">
    <video width="300" height="400" style={{ opacity: '0.5' }}>
      <source src={feed.Thumbnail_URL} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <h4>{feed.Thumbnail_Title}</h4>
    <p>
      Products:{' '}
      {feed.AssociatedProductList ? feed.AssociatedProductList.length : 0}
    </p>
  </div>
);

function DisplayFeeds() {
  const [feedsData, setFeedsData] = useState([]);
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const firstApiUrl =
    'https://5yiek6g5g0.execute-api.ap-south-1.amazonaws.com/Prod/api/engt/getAllPlayList';
  const secondApiUrl =
    'https://5yiek6g5g0.execute-api.ap-south-1.amazonaws.com/Prod/api/engt/getfeeds_v1';

  useEffect(() => {
    async function fetchData() {
      try {
        // First API Request
        const firstResponse = await fetch(firstApiUrl, {
          method: 'POST',
          headers: {
            'X-Api-Key': 'MXqO3cDcr492OTPGZZAot7akPvLmfKbA4bKt5Ryr',
            'X-Tenant-Key': 'INDU140923',
          },
          body: JSON.stringify({ Content_Type: 2 }),
        });

        if (firstResponse.status !== 200) {
          throw new Error('First API request failed');
        }

        const firstData = await firstResponse.json();

        // Second API Request
        const secondResponse = await fetch(secondApiUrl, {
          method: 'POST',
          headers: {
            'X-Api-Key': 'MXqO3cDcr492OTPGZZAot7akPvLmfKbA4bKt5Ryr',
            'X-Tenant-Key': 'INDU140923',
          },
          body: JSON.stringify({
            Index: 1,
            ContentType: [2],
            IsTagged: false,
            URL: '',
          }),
        });

        if (secondResponse.status !== 200) {
          throw new Error('Second API request failed');
        }

        const secondData = await secondResponse.json();
        const secondFeeds = secondData.data.Feeds;
        // const url = secondData.Feeds[0].Contents[0].Url;

        // console.log(url);
        if (secondData && secondData.Feeds) {
          // The data object and data.Feeds property are defined
          const feeds = secondData.Feeds;

          feeds.forEach((feed, feedIndex) => {
            console.log(`URLs for Feed ${feedIndex + 1}:`);

            const contents = feed.Contents;

            contents.forEach((content, contentIndex) => {
              const url = content.Url;
              console.log(`Content ${contentIndex + 1}: ${url}`);
            });
          });
        } else {
          console.error(
            'Data or Feeds is undefined or missing in the response.'
          );
        }

        const productDataArray = [];

        firstData.data.forEach((firstItem) => {
          const { Post_Ids } = firstItem;

          const matchingSecondItems = secondFeeds.filter((secondItem) =>
            Post_Ids.includes(secondItem.EngagementPostId)
          );

          if (matchingSecondItems.length > 0) {
            matchingSecondItems.forEach((matchingItem) => {
              const associatedProductList = matchingItem.AssociatedProductList;
              if (
                Array.isArray(associatedProductList) &&
                associatedProductList.length > 0
              ) {
                associatedProductList.forEach((product) => {
                  productDataArray.push({
                    productdisplayName: product.productdisplayName,
                    productURL: product.baseImageURL,
                  });
                });
              }
            });
          }
        });

        setProductData(productDataArray);
        setFeedsData(secondData);

        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div>
      {/* Display FeedsData */}
      <h1>Feeds Data:</h1>
      <h2>Product Playlists</h2>
      <div className="flex">
        <div>
          {feedsData.data.Feeds.map((feed, index) => (
            <Card key={index} feed={feed} />
          ))}
        </div>
      </div>
      {/* <pre>{JSON.stringify(feedsData, null, 2)}</pre> */}

      {/* Display Product Data */}
      <h1>Product Data:</h1>
      <div className="product-cards">
        {productData.map((product, index) => (
          <div key={index} className="product-card">
            <h2>Product Name: {product.productdisplayName}</h2>
            <img src={product.productURL} alt={product.productdisplayName} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisplayFeeds;
