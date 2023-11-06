import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Card({ feed }) {
  Card.propTypes = {
    feed: PropTypes.shape({
      Thumbnail_URL: PropTypes.string.isRequired,
      Thumbnail_Title: PropTypes.string.isRequired,
      AssociatedProductList: PropTypes.array,
    }).isRequired,
  };

  return (
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
}

function Sidecard({ product, onProductClick }) {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
    onProductClick(product.productdisplayName);
  };

  return (
    <div
      className={`product-card ${isSelected ? 'selected' : ''}`}
      onClick={handleClick}
    >
      <img
        src={product.productURL}
        alt={product.productdisplayName}
        className="product-image"
      />
      <div>
        <p>{product.productdisplayName}</p>
      </div>
    </div>
  );
}

export { Card, Sidecard };
