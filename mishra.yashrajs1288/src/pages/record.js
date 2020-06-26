import React from "react";
import { Helmet } from "react-helmet";

import Layout from "components/Layout";
import Container from "components/Container";
import RecordTable from "components/RecordTable";

const RecordPage = () => {
  return (
    <Layout pageName="two">
      <Helmet>
        <title>Hospital Beds Report</title>
      </Helmet>
      <RecordTable />
    </Layout>
  );
};

export default RecordPage;
