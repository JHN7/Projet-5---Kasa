import { useState } from "react";
import "./Carousel.sass";

function Carousel({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const total = images.length;
    

    const goToNext = () => {
        if (total > 1) {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % total);
        }
    };

    const goToPrev = () => {
        if (total > 1) {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + total) % total);
        }
    };

    return (
        <div className="carousel">
            <img
                className="carousel-image"
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
            />
            <button
                className="carousel-button left"
                onClick={goToPrev}
                disabled={total <= 1}
            >
                <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button
                className="carousel-button right"
                onClick={goToNext}
                disabled={total <= 1}
            >
                <i className="fa-solid fa-chevron-right"></i>
            </button>
            {total > 1 && (
                <div className="carousel-counter">
                    {currentIndex + 1}/{total}
                </div>
            )}
        </div>
    );
}

export default Carousel;
