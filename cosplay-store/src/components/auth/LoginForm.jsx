import React from 'react';

const LoginForm = () => {
  return (
    <form className="p-4 border rounded">
      <h2 className="mb-4">Вход в систему</h2>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" className="form-control" id="email" required />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Пароль</label>
        <input type="password" className="form-control" id="password" required />
      </div>
      <button type="submit" className="btn btn-primary w-100">Войти</button>
      <div className="mt-3 text-center">
        <p>Нет аккаунта? <a href="/register">Зарегистрироваться</a></p>
      </div>
    </form>
  );
};

export default LoginForm;