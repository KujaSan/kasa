import Dropdown from '../components/Dropdown';

const reliabilityButton = "fiabilité";
const reliability = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.";

const respectButton = "Respect";
const respect = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";

const serviceButton = "Service";
const service = "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.";

const secuButton ="Sécurité";
const secu ="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.";

/**
  * Affiche la page "À propos" avec les différents sujets de la plateforme Kasa.
  *
  * @returns {JSX.Element} Élément JSX de la page "À propos".
*/

function About() {
    return (
        <div className='about'>
            <div className='about__banner'></div>
            <div className='about__dropdown'>
                <Dropdown head={reliabilityButton} text={<p className='about__dropdown__text'>{reliability}</p>} />
                <Dropdown head={respectButton} text={<p className='about__dropdown__text'>{respect}</p>} />
                <Dropdown head={serviceButton} text={<p className='about__dropdown__text'>{service}</p>} />
                <Dropdown head={secuButton} text={<p className='about__dropdown__text'>{secu}</p>} />
            </div>
        </div>
    );
}

export default About;