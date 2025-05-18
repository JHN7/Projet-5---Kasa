import { Link } from 'react-router-dom';
import './Card.sass'

function Card({ id, title, cover }) {
    return (
        <Link to={`/logements/${id}`} className="card" style={{ backgroundImage: `url("${cover}")` }}>
            <div className="card-overlay">
                <h2 className="card-title">{title}</h2>
                </div>
      </Link>
    );
  }
  
  export default Card;