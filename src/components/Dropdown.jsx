import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

/**
  * Composant Dropdown : affiche un titre cliquable qui, lorsqu'on le clique, déploie un bloc de contenu.
  * Le titre et le contenu sont passés en props au composant.
  * 
  * @param {object} props 
  * @param {string} props.head Titre du dropdown
  * @param {JSX.Element} props.text Contenu du dropdown (JSX)
*/

const Dropdown = (props)=>{
    // Initialisation de l'état du dropdown à fermé
    const [isOpen, setIsOpen] = useState(false);
    console.log(isOpen);
    // Fonction de changement de l'état du dropdown (ouvert ou fermé)
    const toggleText = () => {
        setIsOpen(!isOpen);
    };
    return(
        <div className="dropdown">
            {/* Bouton titre du dropdown, qui appelle la fonction toggleText lorsqu'on le clique */}
            <button className="dropdown__header" onClick={toggleText}>
                {props.head}
                {/* Bouton titre du dropdown, qui appelle la fonction toggleText lorsqu'on le clique */}
                {isOpen ? (
                    <FontAwesomeIcon className="floatRight" icon={faChevronUp} />
                ) : (
                    <FontAwesomeIcon className="floatRight" icon={faChevronDown} />
                )}
            </button>
            {isOpen && (
                // Le contenu de ce bloc ne s'affiche que si isOpen est vrai (true)
                <div className={`dropdown__panel ${isOpen ? 'open' : 'closed'}`}>
                    {props.text}
                </div>
            )}
        </div>
    )
    
}

export default Dropdown;