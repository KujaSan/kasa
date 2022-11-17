import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';

import Home from './pages/Home';
import Error from './pages/Error';
import Header from './components/Header';
import { 
  BrowserRouter as Router,Routes,
  Route
} from 'react-router-dom';
import Footer from './components/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Header/>
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path='/*' element={<Error />}/>
      </Routes>
    </Router>
    <Footer/>
  </React.StrictMode>
);
