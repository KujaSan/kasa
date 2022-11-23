import '../styles/Home.css';
import logements from '../datas/logements.json';
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <section className='section1'>
        <h1 className='title'>Chez vous,<br/> partout et ailleurs</h1>
      </section>
      <section className='section2'>
          {logements && logements.map((lodge) =>(
              <Link key={lodge.id} to={`/Lodge?id=${lodge.id}`} className='thumb'>
                  <p className='logementTitle'>{lodge.title}</p>
                  <img src={lodge.cover} alt='apercu du logement' className='logementCover'/>
              </Link>
          ))}
      </section>
    </div>
  );
}

export default Home;
