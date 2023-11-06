import React, { useEffect, useState } from 'react';
import { Card, Sidecard } from './Card';

export default function Products() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [feedsData, setFeedsData] = useState([]);
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProductName, setSelectedProductName] = useState(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleProductClick = (productName) => {
    setSelectedProductName(productName);
  };

  useEffect(() => {
    const firstApiUrl =
      'https://5yiek6g5g0.execute-api.ap-south-1.amazonaws.com/Prod/api/engt/getAllPlayList';
    const secondApiUrl =
      'https://5yiek6g5g0.execute-api.ap-south-1.amazonaws.com/Prod/api/engt/getfeeds_v1';
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
        console.log(secondData);
        console.log(firstData);

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
    <div className="container">
      <h2>Product Playlists</h2>
      <div className="flex">
        <div onClick={toggleSidebar}>
          {feedsData.data.Feeds.map((feed, index) => (
            <Card key={index} feed={feed} />
          ))}
        </div>
        {/* <button onClick={toggleSidebar}>Open Sidebar</button> */}
        <div>
          {' '}
          {isSidebarOpen && (
            <div className="sidebar-right">
              {/* <button onClick={toggleSidebar}>Close Sidebar</button> */}
              Thumbnail Title
              <input placeholder="Get Sporty in Style" className="inn" />
              <p>video status</p>
              <div className="flex">
                <div className="flex">
                  <input type="radio" checked />
                  <p>Active </p>
                </div>
                <div className="flex">
                  <input type="radio" />
                  <p>inactive </p>
                </div>
              </div>
              <p>Product List</p>
              <div>
                {productData.map((product, index) => (
                  <Sidecard
                    key={index}
                    product={product}
                    onProductClick={handleProductClick}
                  />
                ))}
              </div>
              {selectedProductName && (
                <div className="product-count">
                  Number of Products with the same name:{' '}
                  {
                    productData.filter(
                      (product) =>
                        product.productdisplayName === selectedProductName
                    ).length
                  }
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
