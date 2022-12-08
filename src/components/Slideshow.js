import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Slideshow = ({ props }) => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent(current ===  - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ?  - 1 : current - 1);
    };
    console.log(props);
    return (
        <div>
            <FontAwesomeIcon className="leftArrow" onClick={prevSlide} icon={faChevronLeft} />
            <FontAwesomeIcon className="rightArrow" onClick={nextSlide} icon={faChevronRight} />
            {props.slides.map((slide, index) => {
                return (
                <div key={index}>
                    {index === current && <img src={slide.image} alt="" />}
                </div>
                );
            })}
        </div>
    );
};

export default Slideshow;