import React from 'react';
import LoginForm from '../components/auth/LoginForm';

const LoginPage = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-md-6 col-lg-4">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;