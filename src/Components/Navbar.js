import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <header>
    <nav>
      <ul>
        <li>
          <NavLink to="/">Books</NavLink>
        </li>
        <li>
          <NavLink to="/categories">Categories</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);
export default Navbar;
