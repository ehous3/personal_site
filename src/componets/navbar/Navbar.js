import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./Navbar.css";

class Navbar extends React.Component {
  state = { clicked: false };

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo" onClick={() => this.scrollToTop()}>
          Ethan Houseworth
        </h1>
        <Link
            className="nav-links"
            activeClass="nav-links"
            to="div1"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
        >
          About Me      
        </Link>
        <Link
            className="nav-links"
            activeClass="nav-links"
            to="div2"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
        >
          Soccer
        </Link>
        <Link
            className="nav-links"
            activeClass="nav-links"
            to="div3"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
        >
          Projects
        </Link>
      </nav>
    );
  }
}

export default Navbar;
