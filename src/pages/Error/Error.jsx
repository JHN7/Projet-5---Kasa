import { Link } from "react-router-dom";
import './Error.sass'

// Composant de page d'erreur 404 affiché quand aucune route ne correspond
function Error() {
  return (
    <div className="error-page">
      <h1 className="error-title">404</h1>
      <h2 className="error-subtitle">Oups ! La page que vous demandez n'existe pas.</h2>
      
{/* Lien de redirection vers la page d'accueil */}
      <Link to="/" className="error-link">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
}

export default Error;
