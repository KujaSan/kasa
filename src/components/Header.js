import '../styles/Header.css';
import * as React from "react";
import { Link } from "react-router-dom";

import logo from '../assets/headerLogo.svg';

function Header(){
    const acceuil = 'Accueil'
    const propos = 'A Propos'
    return(
        <div className='header'>
            <img src={logo} className='headerLogo' alt='logo de kasa' />
            <nav>
                <ul >
                    <li >
                        <Link to="/" className='nav_text'>
                            {acceuil.toUpperCase()}
                        </Link>
                    </li>
                    <li >
                        <Link to="/About" className='nav_text'>
                            {propos.toUpperCase()}
                        </Link>
                    </li>
                </ul>
            </nav> 
        </div>
    )
}

export default Header;