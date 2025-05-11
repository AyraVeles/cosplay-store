import React from 'react';
import { Button, Form } from 'react-bootstrap';

const CartItem = ({ item }) => {
  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    // Здесь будет логика обновления количества в корзине
    console.log(`New quantity for item ${item.id}: ${newQuantity}`);
  };

  const handleRemove = () => {
    // Здесь будет логика удаления товара из корзины
    console.log(`Remove item ${item.id}`);
  };

  return (
    <tr>
      <td className="align-middle">
        <div className="d-flex align-items-center">
          <img 
            src={item.image} 
            alt={item.name} 
            className="cart-item-image me-3 rounded"
            style={{ width: '60px', height: '60px', objectFit: 'cover' }}
          />
          <span>{item.name}</span>
        </div>
      </td>
      <td className="align-middle">{item.price} руб.</td>
      <td className="align-middle">
        <Form.Control
          type="number"
          min="1"
          max="10"
          value={item.quantity}
          onChange={handleQuantityChange}
          style={{ width: '70px' }}
          className="d-inline-block"
        />
      </td>
      <td className="align-middle">{item.price * item.quantity} руб.</td>
      <td className="align-middle">
        <Button 
          variant="outline-danger" 
          size="sm"
          onClick={handleRemove}
          aria-label="Удалить"
        >
          <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
  );
};

export default CartItem;