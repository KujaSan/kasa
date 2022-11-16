import '../styles/Footer.css';
import logo from '../assets/footerLogo.svg';

function Footer(){
    const credit = '© 2020 Kasa. All rights reserved';
    return(
        <div>
            <footer>
                <img src={logo} className='footerLogo' alt='logo de kasa' />
                <p className='credit'>{credit}</p>
            </footer>
        </div>
    )
}

export default Footer