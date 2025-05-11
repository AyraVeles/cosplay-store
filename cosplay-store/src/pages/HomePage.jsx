import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const HomePage = () => {
  const featuredProducts = [
    { id: 1, name: 'Костюм Харли Квинн', price: 5200, image: '/assets/images/harley.jpg' },
    { id: 2, name: 'Меч из Аниме', price: 3200, image: '/assets/images/anime-sword.jpg' },
    { id: 3, name: 'Парик Асаны', price: 1800, image: '/assets/images/wig.jpg' }
  ];

  return (
    <Container>
      <section className="hero-section mb-5 py-5 text-center bg-light rounded">
        <h1>Добро пожаловать в Cosplay Store!</h1>
        <p className="lead">Лучшие товары для вашего идеального косплея</p>
        <a href="/catalog" className="btn btn-primary btn-lg">В каталог</a>
      </section>

      <section className="featured-products mb-5">
        <h2 className="mb-4">Популярные товары</h2>
        <Row xs={1} md={3} className="g-4">
          {featuredProducts.map(product => (
            <Col key={product.id}>
              <Card className="h-100">
                <Card.Img variant="top" src={product.image} style={{ height: '200px', objectFit: 'cover' }} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.price} руб.</Card.Text>
                  <a href={`/product/${product.id}`} className="btn btn-outline-primary">Подробнее</a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      <section className="about-us mb-5">
        <h2 className="mb-4">О нас</h2>
        <p>
          Cosplay Store - это магазин для настоящих фанатов косплея. Мы предлагаем качественные товары
          по доступным ценам. Наша команда состоит из таких же энтузиастов, как и вы, поэтому мы
          понимаем, что важно для косплеера.
        </p>
      </section>
    </Container>
  );
};

export default HomePage;