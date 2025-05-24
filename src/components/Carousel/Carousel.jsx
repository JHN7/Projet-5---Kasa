import { useState } from "react";
import "./Carousel.sass";

//Carousel reçoit un tableau d'images en props
function Carousel({ images }) {
    // Etat suivant l'index de l'image affichée
    const [currentIndex, setCurrentIndex] = useState(0);
    const total = images.length;

    //Fonction image suivante
    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % total);
    };

    //Fonction image précédente
    const goToPrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + total) % total);
    };

    return (
        <div className="carousel">
            {/* Affichage de l'image courante */}
            <img
                className="carousel-image"
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
            />
            
            {/* Affiche les boutons de navigation et le compteur seulement s'il y a plus d'une image */}
            {total > 1 && (
                <>
                    <button className="carousel-button left" onClick={goToPrev}>
                        <i className="fa-solid fa-chevron-left"></i>
                    </button>
                    <button className="carousel-button right" onClick={goToNext}>
                        <i className="fa-solid fa-chevron-right"></i>
                    </button>
                    <div className="carousel-counter">
                        {currentIndex + 1}/{total}
                    </div>
                </>
            )}
        </div>
    );
}

export default Carousel;
