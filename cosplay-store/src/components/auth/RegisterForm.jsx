import React from 'react';

const RegisterForm = ({ onSuccess }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь будет логика регистрации
    if (onSuccess) onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded">
      <h2 className="mb-4">Регистрация</h2>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Имя</label>
        <input type="text" className="form-control" id="name" required />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" className="form-control" id="email" required />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Пароль</label>
        <input type="password" className="form-control" id="password" required />
      </div>
      <div className="mb-3">
        <label htmlFor="confirmPassword" className="form-label">Подтвердите пароль</label>
        <input type="password" className="form-control" id="confirmPassword" required />
      </div>
      <button type="submit" className="btn btn-primary w-100">Зарегистрироваться</button>
      <div className="mt-3 text-center">
        <p>Уже есть аккаунт? <a href="/login">Войти</a></p>
      </div>
    </form>
  );
};

export default RegisterForm;