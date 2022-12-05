import '../styles/Error.css';
import { Link } from "react-router-dom";


function Error() {
  return (
    <div className='Container'>
      <h1 className='errorTitle'>404</h1>
      <h2 className='errorMessage'>Oups! La page que vous <br/> demandez n'existe pas.</h2>
      <Link to="/" className='Error_Link'>
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
}

export default Error;