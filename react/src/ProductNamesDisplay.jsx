import React, { useEffect, useState } from 'react';

function Card({ product }) {
  return (
    <div className="product-card">
      <h2>Product Name: {product.productdisplayName}</h2>
      <img src={product.productURL} alt={product.productdisplayName} />
    </div>
  );
}

function ProductNamesDisplay() {
  const [productData, setProductData] = useState([]);

  const firstApiUrl =
    'https://5yiek6g5g0.execute-api.ap-south-1.amazonaws.com/Prod/api/engt/getAllPlayList';
  const secondApiUrl =
    'https://5yiek6g5g0.execute-api.ap-south-1.amazonaws.com/Prod/api/engt/getfeeds_v1';

  const fetchData = async () => {
    // Fetch data from both APIs and compare
    try {
      const firstResponse = await fetch(firstApiUrl, {
        method: 'POST',
        headers: {
          'X-Api-Key': 'MXqO3cDcr492OTPGZZAot7akPvLmfKbA4bKt5Ryr',
          'X-Tenant-Key': 'INDU140923',
        },
        body: JSON.stringify({ Content_Type: 2 }),
      });

      if (firstResponse.status === 200) {
        const firstData = await firstResponse.json();

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

        if (secondResponse.status === 200) {
          const secondData = await secondResponse.json();
          const secondFeeds = secondData.data.Feeds;

          const productDataArray = [];

          firstData.data.forEach((firstItem) => {
            const { Post_Ids } = firstItem;

            const matchingSecondItems = secondFeeds.filter((secondItem) =>
              Post_Ids.includes(secondItem.EngagementPostId)
            );

            if (matchingSecondItems.length > 0) {
              matchingSecondItems.forEach((matchingItem) => {
                const associatedProductList =
                  matchingItem.AssociatedProductList;
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
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Product Cards:</h1>
      <div className="product-cards">
        {productData.map((product, index) => (
          <Card key={index} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductNamesDisplay;
