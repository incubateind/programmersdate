import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

import "semantic-ui-css/semantic.min.css";
import "assets/stylesheets/application.scss";

import Header from "components/Header";
import NavBar from "components/Navbar";
import Footer from "components/Footer";

const Layout = ({ children, pageName }) => {
  let className = "";

  if (pageName) {
    className = `${className} page-${pageName}`;
  }

  return (
    <>
      <Helmet bodyAttributes={{ class: className }}>
        <title>Hospital Bed Tracker</title>
      </Helmet>
      <div className="wrapper">
        <NavBar />
        {/* <main> */}
        {children}
        {/* </main> */}
        <Footer />
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  pageName: PropTypes.string,
};

export default Layout;
