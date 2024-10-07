import { NavLink } from "react-router-dom";

const NavList = () => {
  return (
    <ul>
      <li>
        <NavLink to="/home">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/services">Services</NavLink>
      </li>
      <li>
        <NavLink to="/work">Work</NavLink>
      </li>
      <li>
        <NavLink to="/articles">Articles</NavLink>
      </li>
      <li>
        <NavLink to="/quote">Get Quote</NavLink>
      </li>
    </ul>
  );
};

export default NavList;
