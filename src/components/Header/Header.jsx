import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.svg'; // Remplace par ton fichier réel
import './Header.sass';

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <img src={Logo} alt="Logo Kasa du site" className="logo" />
      </div>
      <nav className="header-right">
        <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} end>
          Accueil
        </NavLink>
        <NavLink to="/a-propos" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          A Propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
