import React from "react";
import { Button, Link } from "react-scroll";
import logo from "../../../../assets/caryatectonLogo.png";
import { Image } from "@uiComponents";
const MainNavigation = () => {
  return (
    <div className="main-nav-wrapper">
      <ul className="main-nav">
        <li>
          <Link to="trades" spy={true} smooth={true} offset={50} duration={500}>
            Trades
          </Link>
        </li>
        <li>
          <Link
            to="services"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Services
          </Link>
        </li>
        <li className="main-nav-logo">
          <Link to="hero" spy={true} smooth={true} offset={50} duration={500}>
            <Image src={logo} className="main-logo" />
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MainNavigation;
