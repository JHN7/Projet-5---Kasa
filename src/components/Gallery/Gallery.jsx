import logements from '../../data/logements.json';
import Card from '../Card/Card';
import './Gallery.sass';

function Gallery() {
  return (
    <div className="gallery-wrapper">
      <div className="gallery-container">
        <div className="gallery">
          {logements.map((logement) => (
            <Card key={logement.id} title={logement.title} cover={logement.cover} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
