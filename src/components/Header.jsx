import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { SITE_NAME, NAV_LINKS } from '../config/constants';

function Header() {
  // Menu mobile ouvert ou fermé
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <div className="container header-content">
        <NavLink to="/" className="header-brand" onClick={closeMenu}>
          {SITE_NAME}
        </NavLink>

        <button
          type="button"
          className="menu-toggle"
          aria-label="Ouvrir le menu"
          aria-expanded={isOpen}
          onClick={toggleMenu}
        >
          ☰
        </button>

        <nav
          className={isOpen ? 'header-menu open' : 'header-menu'}
          aria-label="Navigation principale"
        >
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} end onClick={closeMenu}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
