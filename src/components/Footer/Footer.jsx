import LogoFooter from '../../assets/logo-footer.svg';
import './Footer.sass';

function Footer() {
  return (
    <footer className="footer">
      <img src={LogoFooter} alt="Logo Kasa" className="footer-logo" />
      <p className="footer-text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
