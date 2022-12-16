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
        <div className="lodge">
            <Slideshow props={lodgeItem.pictures} />
            <section className="lodge__block">
                <div className="lodge__block__top">
                    <h1>{lodgeItem.title}</h1>
                    <h2>{lodgeItem.location}</h2>
                    <div className="lodge__block__top__tagfield">
                        {lodgeItem.tags.map((tag)=>(
                            <p className="lodge__block__top__tagfield__tag">{tag}</p>
                        ))}
                    </div>
                </div>
                <div className="lodge__block__middle">
                    <StarRate rating={lodgeItem.rating} />
                    <div className="lodge__block__middle__vendor">
                            <p className="lodge__block__middle__vendor__name">{lastName}<br/>{firtName}</p>
                            <img src={lodgeItem.host.picture} alt='portrait du proprietaire' className="lodge__block__middle__vendor__picture"/>
                            
                    </div>
                </div>
            </section>
            <section className="lodge__dropdowns">
                <Dropdown head="Description" text={<p>{lodgeItem.description}</p>} />
                <Dropdown head="Équipements" text={<ul className="lodge__dropdowns__list"> {lodgeItem.equipments.map((stuff)=>(
                        <li key={stuff}>{stuff}</li>
                ))}</ul>}/>
            </section>
        </div>
    )
}

export default Lodge;