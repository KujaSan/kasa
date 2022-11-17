import '../styles/Body.css';
import logements from '../datas/logements.json';

function Body(){
    return(
        <div>
            <section className='section1'>
                <h1 className='title'>Chez vous, partout et ailleurs</h1>
            </section>
            <section className='section2'>
                {logements && logements.map((logement) =>(
                    <div key={logement.id} className='thumb'>
                        <p>{logement.title}</p>
                        <img src={logement.cover} alt='apercu du logement' className='logementCover'/>
                    </div>
                ))}
            </section>
        </div>
    )
}

export default Body