import * as React from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/headerLogo.svg';

/**
  * Composant représentant l'entête de page de l'application
  * @returns {JSX.Element} Élément JSX du composant Header
*/

function Header(){
    const acceuil = 'Accueil';
    const propos = 'A Propos';
    // Style à appliquer au lien actif
    let activeStyle = {
        textDecoration: "underline",
    };
    return(
        <div className='header'>
            <img src={logo} className='header__logo' alt='logo de kasa' />
            <nav className='header__menu'>
                <NavLink to="/" style={({ isActive }) =>isActive ? activeStyle : undefined} className='header__menu__text'>
                    {acceuil}
                </NavLink>
            
                <NavLink to="/About" style={({ isActive }) =>isActive ? activeStyle : undefined} className='header__menu__text'>
                    {propos}
                </NavLink>
            </nav> 
        </div>
    )
}

export default Header;