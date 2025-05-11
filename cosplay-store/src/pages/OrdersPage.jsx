import React from 'react';
import { Container } from 'react-bootstrap';
import OrderItem from '../components/orders/OrderItem';

const OrdersPage = () => {
  // Временные данные для примера
  const orders = [
    {
      id: 12345,
      date: '2023-05-15',
      status: 'delivered',
      items: [
        { id: 1, name: 'Костюм Женщины-кошки', price: 4800, quantity: 1 },
        { id: 2, name: 'Уши кошки', price: 800, quantity: 1 }
      ],
      total: 5600
    },
    {
      id: 12344,
      date: '2023-05-10',
      status: 'shipped',
      items: [
        { id: 3, name: 'Костюм Бэтмена', price: 5200, quantity: 1 },
        { id: 4, name: 'Плащ Бэтмена', price: 1500, quantity: 1 }
      ],
      total: 6700
    }
  ];

  return (
    <Container className="py-4">
      <h2 className="mb-4">Мои заказы</h2>
      {orders.length > 0 ? (
        orders.map(order => <OrderItem key={order.id} order={order} />)
      ) : (
        <div className="text-center py-5">
          <h4>У вас пока нет заказов</h4>
          <p>Перейдите в каталог, чтобы сделать первый заказ</p>
          <a href="/catalog" className="btn btn-primary">В каталог</a>
        </div>
      )}
    </Container>
  );
};

export default OrdersPage;