import React from "react";
import { Link } from "gatsby";
import Container from "components/Container";

const Header = () => {
  return (
    <header>
      <Container type="content">
        <p>Hospital Bed Tracker</p>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/record/">Record</Link>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
