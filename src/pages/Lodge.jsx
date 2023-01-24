import { useSearchParams } from "react-router-dom";
import logements from '../datas/logements.json';

import Dropdown from '../components/Dropdown';
import StarRate from "../components/StarRate";
import Slideshow  from "../components/Slideshow";
import Error from "../pages/Error";

/**
  * Affiche la page de détail d'un logement en utilisant les données du logement trouvé dans le fichier logements.json.
  * Si aucun logement ne correspond à l'ID spécifié dans l'URL, affiche une page d'erreur.
  *
  * @returns {JSX.Element} Élément JSX de la page de détail du logement.
*/
function Lodge(){
    // Récupère les paramètres de recherche de l'URL.
    let [searchParams] = useSearchParams();
    // Récupère la valeur du paramètre "id" dans les paramètres de recherche.
    const id = searchParams.get("id");
    // Trouve le logement dans le tableau logements qui a l'id correspondant.
    const lodgeItem = logements.find( lodge =>lodge.id === id);
    // Si aucun logement ne correspond à l'id, affiche la page d'erreur.
    if (!lodgeItem) {
        return <Error />;
    }
    //separation du nom et du prénom du nom complet de l'hôte
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
                <Dropdown head="Description" text={<p className="lodge__dropdowns__text" >{lodgeItem.description}</p>} />
                <Dropdown head="Équipements" text={<ul className="lodge__dropdowns__list"> {lodgeItem.equipments.map((stuff)=>(
                        <li key={stuff}>{stuff}</li>
                ))}</ul>}/>
            </section>
        </div>
    )
}

export default Lodge;