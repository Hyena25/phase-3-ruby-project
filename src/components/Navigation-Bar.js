import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div>
      <nav className="navbar">
        <div className="nav-container">
          <Link as={Link} to="/" className="nav-logo">
            Placeholder
          </Link>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {/* <li className="nav-item">
              <Link as={Link} to="/critics" className="nav-links" onClick={handleClick}>
                Critics
              </Link>
            </li> */}
            <li className="nav-item">
              <Link
                as={Link}
                to="/reviews"
                className="nav-links"
                onClick={handleClick}
              >
                Reviews
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link as={Link} to="" className="nav-links" onClick={handleClick}>
                Contact Us
              </Link>
            </li> */}
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
