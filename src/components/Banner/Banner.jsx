import './Banner.sass';

// Composant Banner : affiche une image en fond avec un texte optionnel par-dessus
function Banner({ image, text }) {
  return (
    // Conteneur principal avec une image en arrière-plan
    <div className="banner" style={{ backgroundImage: `url(${image})` }}>
      
      {/* Superposition semi-transparente pour améliorer la lisibilité du texte */}
      <div className="banner-overlay">
        
        {/* Affiche le texte uniquement si une prop "text" est fournie */}
        {text && <h1 className="banner-text">{text}</h1>}
      </div>
    </div>
  );
}

export default Banner;
