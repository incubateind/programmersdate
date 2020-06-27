import React from "react";
import { Helmet } from "react-helmet";

import Layout from "components/Layout";
import MapMaker from "components/mapMaker";
import { Container, Header } from "semantic-ui-react";

const AboutPage = () => {
  return (
    <Layout pageName="home">
      <Helmet>
        <title>About</title>
      </Helmet>
      <Container text style={{ marginTop: "7em" }}>
        <Header as="h1">About Project</Header>
        <p>this project is my Submission for Programmers date by IncubateIND</p>
      </Container>
    </Layout>
  );
};

export default AboutPage;
