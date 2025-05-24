import './Rating.sass'

// Composant qui affiche une note sous forme d'étoiles (plein/vides)
function Rating({ note }) {
  const totalStars = 5;           // Nombre total d'étoiles à afficher
  const numNote = parseInt(note); // Conversion de la note en nombre entier 
  const stars = [];               // Tableau pour stocker les étoiles générées

// Boucle de 1 à 5 pour générer chaque étoile
  for (let i = 1; i <= totalStars; i++) {
  // Si i est inférieur ou égal à la note, étoile pleine ; sinon, étoile vide
    stars.push(
      <i
        key={i}
        className={`fa-star ${i <= numNote ? 'fa-solid' : 'fa-regular'}`}
      ></i>
    );
  }

  return (
    <div className="rating">{stars}</div>
  );
}

export default Rating;
