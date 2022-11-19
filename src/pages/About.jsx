import '../styles/About.css';
import banner from '../assets/about/gustavo-alves_Banner.png';
import Collapsible from '../components/Collapsible';

function About() {
    return (
        <div>
            <img src={banner} className='banner' alt="banner"/>
            <Collapsible/>
        </div>
    );
}

export default About;