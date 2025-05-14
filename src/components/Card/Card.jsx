import './Card.sass'

function Card({ title, cover }) {
    return (
        <div className="card" style={{ backgroundImage: `url("${cover}")` }}>
            <div className="card-overlay">
                <h2 className="card-title">{title}</h2>
                </div>
      </div>
    );
  }
  
  export default Card;