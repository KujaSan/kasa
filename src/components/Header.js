import '../styles/Header.css';
import logo from '../assets/LOGO.svg';

function Header(){
    return(
        <div className='header'>
            <img src={logo} className='LOGO' alt='logo de kasa' />
            <nav>
                <ul >
                    <li className='nav_text'>
                        Acceuil
                    </li>
                    <li className='nav_textBis'>
                        A Propos
                    </li>
                </ul>
            </nav> 
        </div>
    )
}

export default Header