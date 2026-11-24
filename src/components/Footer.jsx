import { SITE_NAME } from '../config/constants';

function Footer() {
  return (
    <footer>
      <div className="container text-center">
        <p>© 2026 {SITE_NAME}. Tous droits réservés.</p>
        <ul className="liens-sociaux">
          <li><a href="#">LinkedIn</a></li>
          <li><a href="#">GitHub</a></li>
          <li><a href="#">Twitter</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
