import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Product from './pages/Product';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'product/:barcode', element: <Product /> }
    ]
  }
]);

export default router;
