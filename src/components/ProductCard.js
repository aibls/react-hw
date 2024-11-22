import React from 'react';
import './ProductCard.css';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <div className="product-details">
        <p className="product-category">{product.category}</p>
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">${product.price}</p>
        <button className="add-to-cart-button">Добавить в корзину</button>
      </div>
    </div>
  );
}

export default ProductCard;
