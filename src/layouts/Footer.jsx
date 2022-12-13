import logo from '../assets/footerLogo.svg';

function Footer(){
    const credit = '© 2020 Kasa. All rights reserved';
    return(
        <div>
            <footer className='footer'>
                <img src={logo} className='footer__logo' alt='logo de kasa' />
                <p className='footer__credit'>{credit}</p>
            </footer>
        </div>
    )
}

export default Footer