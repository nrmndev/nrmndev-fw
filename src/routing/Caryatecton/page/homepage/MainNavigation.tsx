import React, { useState } from "react";
import { Button, Link } from "react-scroll";
import logo from "../../../../assets/caryatectonLogo.png";
import { Image } from "@uiComponents";
import { GiHamburgerMenu } from "react-icons/gi";
const MainNavigation = () => {
  const [navActive, setNavActive] = useState(false);

  return (
    <div className="main-nav-wrapper">
      <ul className="main-nav">
        <li style={{ display: navActive ? "block" : "none" }}>
          <Link to="trades" spy={true} smooth={true} offset={50} duration={500}>
            Trades
          </Link>
        </li>
        <li style={{ display: navActive ? "block" : "none" }}>
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
        <li style={{ display: navActive ? "block" : "none" }}>
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
        <li style={{ display: navActive ? "block" : "none" }}>
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
      <button
        className="main-nav-mobile-toggle"
        onClick={() => setNavActive(!navActive)}
      >
        <GiHamburgerMenu />
      </button>
    </div>
  );
};

export default MainNavigation;
