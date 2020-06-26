
import React from "react";

import { Container, Nav, NavItem, NavLink } from "reactstrap";

const Footer = () => {

  return (
    <footer className="footer">
      <Container fluid>
        <Nav>
          <NavItem>
            <NavLink href="https://tandonpushkar.netlify.app" target="_blank" rel="noopener noreferrer">Coder-Biceps</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://tandonpushkar.netlify.app" target="_blank" rel="noopener noreferrer">About Us</NavLink>
          </NavItem>
        </Nav>
        <div className="copyright">
          © {new Date().getFullYear()} made with{" "}
          <i className="tim-icons icon-heart-2" /> by{" "}
          <a
            href="https://tandonpushkar.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Coder-Biceps
            </a>{" "}
            for a better web.
          </div>
      </Container>
    </footer>
  );
}

export default Footer;
