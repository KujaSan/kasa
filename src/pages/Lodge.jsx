import { useSearchParams } from "react-router-dom";
import logements from '../datas/logements.json';

import Dropdown from '../components/Dropdown';
import StarRate from "../components/StarRate";
import Slideshow  from "../components/Slideshow";


function Lodge(){
    let [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const lodgeItem = logements.find( lodge =>lodge.id === id);
    
    let fullName = lodgeItem.host.name;
    let words = fullName.split(" ");
    let lastName = words[0];
    let firtName = words[1];

    return(
        <div>
            <Slideshow props={lodgeItem.pictures} />
            <section className="lodgeblock">
                <div className="lodgeblock__top">
                    <h1>{lodgeItem.title}</h1>
                    <h2>{lodgeItem.location}</h2>
                    <div className="lodgeblock__top__tagfield">
                        {lodgeItem.tags.map((tag)=>(
                            <p className="lodgeblock__top__tagfield__tag">{tag}</p>
                        ))}
                    </div>
                </div>
                <div className="lodgeblock__middle">
                    <StarRate rating={lodgeItem.rating} />
                    <div className="lodgeblock__middle__vendor">
                            <p className="lodgeblock__middle__vendor__name">{lastName}<br/>{firtName}</p>
                            <img src={lodgeItem.host.picture} alt='portrait du proprietaire' className="lodgeblock__middle__vendor__picture"/>
                            
                    </div>
                </div>
            </section>
            <section className="dropdown-container">
                <Dropdown head="Description" text={<p>{lodgeItem.description}</p>} />
                <Dropdown head="Équipements" text={<ul className="dropdownList"> {lodgeItem.equipments.map((stuff)=>(
                        <li key={stuff}>{stuff}</li>
                ))}</ul>}/>
            </section>
        </div>
    )
}

export default Lodge;