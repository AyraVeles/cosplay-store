import React from 'react';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import CartItem from '../components/cart/CartItem';
import CartSummary from '../components/cart/CartSummary';

const CartPage = () => {
  // Временные данные для примера
  const cartItems = [
    { id: 1, name: 'Костюм Человека-паука', price: 4500, quantity: 1, image: '/assets/images/spiderman.jpg' },
    { id: 2, name: 'Меч из Final Fantasy', price: 3200, quantity: 2, image: '/assets/images/sword.jpg' }
  ];

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <Container>
      <h2 className="my-4">Корзина</h2>
      <Row>
        <Col md={8}>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Товар</th>
                <th>Цена</th>
                <th>Количество</th>
                <th>Итого</th>
                <th>Действия</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map(item => (
                <CartItem key={item.id} item={item} />
              ))}
            </tbody>
          </Table>
        </Col>
        <Col md={4}>
          <CartSummary total={total} />
          <Button variant="success" size="lg" className="w-100 mt-3">
            Оформить заказ
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default CartPage;