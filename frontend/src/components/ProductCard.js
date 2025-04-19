import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <span className="product-price">${product.price.toFixed(2)}</span>
            <button className="add-to-cart-button">Add to Cart</button>
        </div>
    );
};

export default ProductCard;