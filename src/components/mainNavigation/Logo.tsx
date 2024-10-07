import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/caryatecton-logo.png";

const Logo = () => {
  return (
    <div className="logo-wrapper">
      <Link to="/mainnavigation" className="logo">
        <img src={logo} alt="caryatecton logo" />
      </Link>
    </div>
  );
};

export default Logo;
