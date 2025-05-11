import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-auto">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Cosplay Store</h5>
            <p>Лучшие товары для косплея по доступным ценам</p>
          </div>
          <div className="col-md-4">
            <h5>Контакты</h5>
            <ul className="list-unstyled">
              <li>Email: info@cosplaystore.ru</li>
              <li>Телефон: +7 (123) 456-78-90</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Соцсети</h5>
            <div className="social-links">
              <a href="#" className="text-white me-2">VK</a>
              <a href="#" className="text-white me-2">Telegram</a>
              <a href="#" className="text-white">Instagram</a>
            </div>
          </div>
        </div>
        <div className="text-center mt-3">
          <p className="mb-0">&copy; 2023 Cosplay Store. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;