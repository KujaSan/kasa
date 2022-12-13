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
            <h1>{lodgeItem.title}</h1>
            <h2 className="locationMessage">{lodgeItem.location}</h2>
            <div className="tagField">
                {lodgeItem.tags.map((tag)=>(
                    <p className="tag">{tag}</p>
                ))}
            </div>
            <div className="middleblock">
                <div className="rating">
                    <StarRate rating={lodgeItem.rating} />
                </div>
                <div className="vendorInfo">
                        <p className="vendorName">{lastName}<br/>{firtName}</p>
                        <img src={lodgeItem.host.picture} alt='portrait du proprietaire' className="vendorPicture"/>
                        
                </div>
            </div>
            <Dropdown head="Description" text={<p>{lodgeItem.description}</p>} />
            <Dropdown head="Équipements" text={<ul className="dropdownList"> {lodgeItem.equipments.map((stuff)=>(
                    <li key={stuff}>{stuff}</li>
            ))}</ul>}/>
        </div>
    )
}

export default Lodge;