import * as React from "react";
import {Routes, Route} from "react-router-dom";

import Header from './layouts/Header';
import Home from './pages/Home';
import Lodge from './pages/Lodge';
import About from './pages/About';
import Error from './pages/Error';
import Footer from './layouts/Footer';


function App(){
    return(
        <div className="App">
            <Header/>
                <Routes>
                    <Route exact path='/' element={<Home />}/>
                    <Route path='/About' element={<About />}/>
                    <Route path="/Lodge" element={<Lodge />}/>
                    <Route path='*' element={<Error />}/>
                </Routes>
            <Footer/>
        </div>
    )
}

export default App;