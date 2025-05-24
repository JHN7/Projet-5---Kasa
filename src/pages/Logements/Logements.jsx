import { useParams } from "react-router-dom";
import data from "../../data/logements.json";
import Carousel from "../../components/Carousel/Carousel";
import Rating from "../../components/Rating/Rating";
import Dropdown from "../../components/Dropdown/Dropdown";
import Tag from "../../components/Tag/Tag";
import Host from "../../components/Host/Host";
import Error from "../../components/Error/Error";
import "./Logements.sass";

// Page de détail d’un logement, identifiée par son id dans l’URL
function Logements() {
  // Récupération de l'id du logement depuis l’URL
  const { id } = useParams();

  // Recherche du logement correspondant dans les données
  const logement = data.find((item) => item.id === id);

  // Si aucun logement ne correspond, affichage de la page d’erreur
  if (!logement) {
    return <Error />;
  }

  return (
    <div className="logement-page">
      {/* Carrousel des images du logement */}
      <Carousel images={logement.pictures} />

      <div className="logement-header">
        <div className="logement-info">
          {/* Titre et localisation */}
          <h1 className="logement-title">{logement.title}</h1>
          <p className="logement-location">{logement.location}</p>

          {/* Affichage des tags */}
          <div className="tags">
            {logement.tags.map((tag, index) => (
              <Tag key={index} tagName={tag} />
            ))}
          </div>
        </div>

        <div className="logement-right">
          {/* Informations sur l’hôte */}
          <Host name={logement.host.name} picture={logement.host.picture} />

          {/* Note sous forme d’étoiles */}
          <Rating note={logement.rating} />
        </div>
      </div>

      {/* Dropdowns pour la description et les équipements */}
      <div className="logement-dropdowns">
        <Dropdown title="Description">{logement.description}</Dropdown>
        <Dropdown title="Équipements" items={logement.equipments} />
      </div>
    </div>
  );
}

export default Logements;
