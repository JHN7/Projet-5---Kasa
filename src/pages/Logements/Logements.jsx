import { useParams } from "react-router-dom";
import data from "../../data/logements.json";
import Carousel from "../../components/Carousel/Carousel";
import Rating from "../../components/Rating/Rating";
import Dropdown from "../../components/Dropdown/Dropdown";
import Tag from "../../components/Tag/Tag";
import Host from "../../components/Host/Host";
import Error from "../../components/Error/Error";
import "./Logements.sass";

function Logements() {
  const { id } = useParams();
  const logement = data.find((item) => item.id === id);

  if (!logement) {
    return <Error />;
  }

  return (
    <div className="logement-page">
      <Carousel images={logement.pictures} />

      <div className="logement-header">
        <div className="logement-info">
          <h1 className="logement-title">{logement.title}</h1>
          <p className="logement-location">{logement.location}</p>
          <div className="tags">
            {logement.tags.map((tag, index) => (
              <Tag key={index} tagName={tag} />
            ))}
          </div>
        </div>

        <div className="logement-right">
          <Host name={logement.host.name} picture={logement.host.picture} />
          <Rating note={logement.rating} />
        </div>
      </div>

      <div className="logement-dropdowns">
        <Dropdown title="Description">{logement.description}</Dropdown>
        <Dropdown title="Équipements" items={logement.equipments} />
      </div>
    </div>
  );
}

export default Logements;
