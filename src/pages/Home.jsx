import logements from '../datas/logements.json';
import { Link } from "react-router-dom";

/**
  * Composant de la page d'accueil.
  *
  * @returns {JSX.Element} Élément JSX du composant Home.
*/

function Home() {
  return (
    <div>
      <section className='banner'>
        <h1 className='banner__title'><span>Chez vous, </span> <span>partout et ailleurs</span></h1>
      </section>
      <section className='cardfolder'>
          {logements && logements.map((lodge) =>(
          /**
            * Affiche une carte pour chaque logement du tableau logements.
            *
            * @param {object} lodge - Objet contenant les données du logement.
            * @returns {JSX.Element} Élément JSX de la carte du logement.
          */
              <Link key={lodge.id} to={`/Lodge?id=${lodge.id}`} className='cardfolder__card'>
                  <p className='cardfolder__card__title'>{lodge.title}</p>
                  <img src={lodge.cover} alt='apercu du logement' className='cardfolder__card__picture'/>
              </Link>
          ))}
      </section>
    </div>
  );
}

export default Home;
