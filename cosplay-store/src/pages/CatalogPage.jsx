import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Filters from '../components/catalog/Filters';
import CatalogGrid from '../components/catalog/CatalogGrid';

const CatalogPage = () => {
  // В реальном приложении здесь будет загрузка данных
  const products = [
    { id: 1, name: 'Костюм Человека-паука', price: 4500, description: 'Полный костюм с маской', image: '/assets/images/spiderman.jpg' },
    // другие товары...
  ];

  return (
    <Container>
      <Row>
        <Col md={3}>
          <Filters />
        </Col>
        <Col md={9}>
          <CatalogGrid products={products} />
        </Col>
      </Row>
    </Container>
  );
};

export default CatalogPage;