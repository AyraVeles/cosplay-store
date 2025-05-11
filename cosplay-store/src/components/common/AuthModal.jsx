import React, { useState } from 'react';
import { Modal, Tab, Tabs } from 'react-bootstrap';
import LoginForm from '../auth/LoginForm';
import RegisterForm from '../auth/RegisterForm';

const AuthModal = ({ show, onHide }) => {
  const [activeTab, setActiveTab] = useState('login');

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Авторизация</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Tabs
          activeKey={activeTab}
          onSelect={(k) => setActiveTab(k)}
          className="mb-3"
        >
          <Tab eventKey="login" title="Вход">
            <LoginForm onSuccess={onHide} />
          </Tab>
          <Tab eventKey="register" title="Регистрация">
            <RegisterForm onSuccess={onHide} />
          </Tab>
        </Tabs>
      </Modal.Body>
    </Modal>
  );
};

export default AuthModal;