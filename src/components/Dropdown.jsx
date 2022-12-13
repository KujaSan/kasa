import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";




const Dropdown = (props)=>{
    const [isOpen, setIsOpen] = useState(false);
    const toggleText = () => {
        setIsOpen(!isOpen);
    };

    return(
        <div className="dropdown">
            <button className="dropdown__header" onClick={toggleText}>
                {props.head}
                {isOpen ? (
                    <FontAwesomeIcon className="floatRight" icon={faChevronUp} />
                ) : (
                    <FontAwesomeIcon className="floatRight" icon={faChevronDown} />
                )}
            </button>
            {isOpen && (
                <div className="dropdown__panel">{props.text}</div>
            )}
        </div>
    )
    
}

export default Dropdown;