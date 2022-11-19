import '../styles/Error.css';
import { Link } from "react-router-dom";


function Error() {
  return (
    <div className='Container'>
      <h1 className='errorTitle'>404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <Link to="/" className='nav_text'>
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
}

export default Error;