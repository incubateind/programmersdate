import React from "react";
import { Helmet } from "react-helmet";

import Layout from "components/Layout";
import Container from "components/Container";
import MapMaker from "components/mapMaker";

const IndexPage = () => {
  return (
    <Layout pageName="home">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <MapMaker />
    </Layout>
  );
};

export default IndexPage;
