import * as React from "react";
import { Link } from "react-router-dom";

import logo from '../assets/headerLogo.svg';

function Header(){
    const acceuil = 'Accueil'
    const propos = 'A Propos'
    return(
        <div className='header'>
            <img src={logo} className='header__logo' alt='logo de kasa' />
            <nav>
                <ul className='header__menu'>
                    <li >
                        <Link to="/" className='header__menu__text'>
                            {acceuil}
                        </Link>
                    </li>
                    <li >
                        <Link to="/About" className='header__menu__text'>
                            {propos}
                        </Link>
                    </li>
                </ul>
            </nav> 
        </div>
    )
}

export default Header;