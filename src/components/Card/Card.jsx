import { Link } from 'react-router-dom';
import './Card.sass';

// Composant qui représente une carte cliquable pour un logement
function Card({ id, title, cover }) {
    return (
        // Lien vers la page de détail du logement, avec une image en fond
        <Link
            to={`/logements/${id}`}
            className="card"
            style={{ backgroundImage: `url("${cover}")` }}
        >
            <div className="card-overlay">
                {/* Titre du logement affiché en surimpression */}
                <h2 className="card-title">{title}</h2>
            </div>
        </Link>
    );
}

export default Card;
