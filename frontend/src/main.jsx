import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
 codex/check-repo-status-and-update-readme.md-o5l5my
import { ToastContainer } from 'react-toastify';
import router from './router';
import './styles/index.css';
import 'react-toastify/dist/ReactToastify.css';
=======
import router from './router';
import './styles/index.css';
 main

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
 codex/check-repo-status-and-update-readme.md-o5l5my
    <ToastContainer position="top-right" autoClose={3000} />
=======
 main
  </React.StrictMode>
);
