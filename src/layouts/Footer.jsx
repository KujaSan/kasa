import logo from '../assets/footerLogo.svg';

/**
  * Composant représentant le pied de page de l'application
  * @returns {JSX.Element} Élément JSX du composant Footer
*/

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