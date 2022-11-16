import '../styles/Header.css';
import logo from '../assets/headerLogo.svg';

function Header(){
    const acceuil = 'Accueil'
    const propos = 'A Propos'
    return(
        <div className='header'>
            <img src={logo} className='headerLogo' alt='logo de kasa' />
            <nav>
                <ul >
                    <li className='nav_text'>
                        {acceuil.toUpperCase()}
                    </li>
                    <li className='nav_text'>
                        {propos.toUpperCase()}
                    </li>
                </ul>
            </nav> 
        </div>
    )
}

export default Header