import logements from '../../data/logements.json';
import Card from '../Card/Card';
import './Gallery.sass';

// Composant Gallery qui affiche toutes les cartes de logements
function Gallery() {
  return (
    // Conteneur principal de la galerie
    <div className="gallery-wrapper">
      <div className="gallery">
        {/* Parcours du tableau de logements pour afficher une Card pour chaque élément */}
        {logements.map((logement) => (
          <Card
            key={logement.id}            // Clé unique pour React
            id={logement.id}             // ID transmis à la Card pour la route
            title={logement.title}       // Titre du logement
            cover={logement.cover}       // Image de couverture
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
