import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <header className="header">
    <NavLink to="/" className="header__title">
      Bookstore CMS
    </NavLink>
    <nav>
      <ul className="header__list">
        <li className="header__item">
          <NavLink to="/" className="header__link">
            Books
          </NavLink>
        </li>
        <li className="header__item">
          <NavLink to="/categories" className="header__link">
            Categories
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);
export default Navbar;
