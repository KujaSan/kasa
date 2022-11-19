import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';

import Home from './pages/Home';
import Error from './pages/Error';
import Header from './components/Header';
import About from './pages/About.jsx';
import Footer from './components/Footer';

import { 
  BrowserRouter as Router,Routes,
  Route
} from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path='/About' element={<About />}/>
        <Route path='/*' element={<Error />}/>
      </Routes>
      <Footer/>
    </Router>
  </React.StrictMode>
);
