import logements from '../datas/logements.json';
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <section className='banner'>
        <h1 className='banner__title'><span>Chez vous, </span> <span>partout et ailleurs</span></h1>
      </section>
      <section className='cardfolder'>
          {logements && logements.map((lodge) =>(
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
