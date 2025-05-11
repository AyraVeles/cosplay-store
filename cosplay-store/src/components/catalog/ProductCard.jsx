import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="card h-100">
      <img 
        src={product.image} 
        className="card-img-top" 
        alt={product.name} 
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <div className="mt-auto">
          <p className="fw-bold">{product.price} руб.</p>
          <button className="btn btn-outline-primary w-100">
            В корзину
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;