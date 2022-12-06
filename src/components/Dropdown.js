import '../styles/Dropdown.css';
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";




const Dropdown = (props)=>{
    const [isOpen, setIsOpen] = useState(false);
    const toggleText = () => {
        setIsOpen(!isOpen);
    };

    return(
        <div>
            <div>
                <button className="dropdown-header" onClick={toggleText}>
                    {props.head}
                    {isOpen ? (
                        <FontAwesomeIcon className="floatRight" icon={faChevronUp} />
                    ) : (
                        <FontAwesomeIcon className="floatRight" icon={faChevronDown} />
                    )}
                </button>
                {isOpen && (
                    <div className="dropdown-panel">{props.text}</div>
                )}
            </div>
        </div>
    )
    
}

export default Dropdown;