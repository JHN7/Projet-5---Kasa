import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.svg'; // Logo du site
import './Header.sass';

// Composant Header affiché en haut de toutes les pages
function Header() {
  return (
    <header className="header">
      <div className="header-left">
        {/* Logo du site */}
        <img src={Logo} alt="Logo Kasa du site" className="logo" />
      </div>

      {/* Navigation principale avec liens vers les pages principales */}
      <nav className="header-right">
        {/* Lien vers la page d'accueil */}
        <NavLink
          to="/"
          className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          end
        >
          Accueil
        </NavLink>

        {/* Lien vers la page À Propos*/}
        <NavLink
          to="/a-propos"
          className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          end
        >
          A Propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
