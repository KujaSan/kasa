import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Slideshow = ({ props }) => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent(current === props.length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? props.length - 1 : current - 1);
    };
    console.log(props);

    return (
        <div className='slideshow'>
            <div className="slideshow__arrows">
                <FontAwesomeIcon className="slideshow__arrows__item" onClick={prevSlide} icon={faChevronLeft} />
                <FontAwesomeIcon className="slideshow__arrows__item" onClick={nextSlide} icon={faChevronRight} />
            </div>
            {props.map((slide,index) => (
                <div key={index}>
                    {index === current && <img className="slideshow__slide" src={slide} alt=""></img>}
                </div>
                )
            )}
        </div>
    );
};

export default Slideshow;