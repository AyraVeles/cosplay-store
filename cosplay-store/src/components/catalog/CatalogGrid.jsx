import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';

const CatalogGrid = ({ products }) => {
  return (
    <Row xs={1} sm={2} lg={3} xl={4} className="g-4">
      {products.map(product => (
        <Col key={product.id}>
          <ProductCard product={product} />
        </Col>
      ))}
    </Row>
  );
};

export default CatalogGrid;