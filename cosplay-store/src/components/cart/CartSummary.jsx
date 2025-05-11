import React from 'react';

const CartSummary = ({ total }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Итого</h5>
        <div className="d-flex justify-content-between mb-2">
          <span>Товары:</span>
          <span>{total} руб.</span>
        </div>
        <div className="d-flex justify-content-between mb-2">
          <span>Доставка:</span>
          <span>500 руб.</span>
        </div>
        <hr />
        <div className="d-flex justify-content-between fw-bold">
          <span>Всего:</span>
          <span>{total + 500} руб.</span>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;