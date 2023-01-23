import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter } from 'react-router-dom';

import './styles/main.css';

import App from './App.jsx';

/**
  * Élément racine de l'application.
  * @type {HTMLElement}
*/
const root = ReactDOM.createRoot(document.getElementById('root'));

/**
  * Rendu de l'application dans l'élément racine.
*/

root.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);
