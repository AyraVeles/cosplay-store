import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import {
  HomePage,
  CatalogPage,
  LoginPage,
  RegisterPage,
  CartPage,
  OrdersPage
} from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'catalog', element: <CatalogPage /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'register', element: <RegisterPage /> },
      { path: 'cart', element: <CartPage /> },
      { path: 'orders', element: <OrdersPage /> }
    ]
  }
]);

export default router;