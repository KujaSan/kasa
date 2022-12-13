import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter } from 'react-router-dom';
import './styles/index.css';
import './styles/main.css';

import App from './App.jsx';





const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);
