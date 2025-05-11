import React from 'react';
import { Badge } from 'react-bootstrap';

const OrderItem = ({ order }) => {
  const getStatusBadge = (status) => {
    switch(status) {
      case 'processing':
        return <Badge bg="warning">В обработке</Badge>;
      case 'shipped':
        return <Badge bg="info">Отправлен</Badge>;
      case 'delivered':
        return <Badge bg="success">Доставлен</Badge>;
      default:
        return <Badge bg="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h5 className="card-title">Заказ #{order.id}</h5>
          {getStatusBadge(order.status)}
        </div>
        <p className="card-text">
          <small className="text-muted">
            Дата заказа: {new Date(order.date).toLocaleDateString()}
          </small>
        </p>
        <ul className="list-group list-group-flush mb-3">
          {order.items.map(item => (
            <li key={item.id} className="list-group-item d-flex justify-content-between">
              <span>{item.name} x {item.quantity}</span>
              <span>{item.price * item.quantity} руб.</span>
            </li>
          ))}
        </ul>
        <div className="d-flex justify-content-between fw-bold">
          <span>Итого:</span>
          <span>{order.total} руб.</span>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;