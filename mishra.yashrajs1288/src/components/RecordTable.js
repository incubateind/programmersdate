import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import Container from "components/Container";
import DataTable, { createTheme } from "react-data-table-component";
import axios from "axios";

createTheme("solarized", {
  text: {
    primary: "#268bd2",
    secondary: "#2aa198",
  },
  background: {
    default: "#002b36",
  },
  context: {
    background: "#cb4b16",
    text: "#FFFFFF",
  },
  divider: {
    default: "#073642",
  },
  action: {
    button: "rgba(0,0,0,.54)",
    hover: "rgba(0,0,0,.08)",
    disabled: "rgba(0,0,0,.12)",
  },
});

const customStyles = {
  headRow: {
    style: {
      border: "1px solid #000",
    },
  },
  headCells: {
    style: {
      color: "#202124",
      fontSize: "14px",
      fontWeight: "bold",
    },
  },
  rows: {
    highlightOnHoverStyle: {
      backgroundColor: "#dcdefa",
      borderBottomColor: "#FFFFFF",
      borderRadius: "25px",
      outline: "1px solid #FFFFFF",
    },
  },
  pagination: {
    style: {
      border: "none",
    },
  },
};

const columns = [
  {
    name: "Hospital Name",
    selector: "hospitalName",
    sortable: true,
  },
  {
    name: "Available Beds",
    selector: "availableBed",
    sortable: true,
  },
  {
    name: "Emergency Contact",
    selector: "emergencyContact",
    sortable: true,
  },
  {
    name: "Total Beds",
    selector: "totalBed",
    sortable: true,
  },
  {
    name: "Equipted Beds",
    selector: "equiptedBed",
    sortable: true,
  },
];

const RecordTable = () => {
  const [hereData, sethereData] = useState([]);

  useEffect(() => {
    makeGetRequest();
  }, []);

  async function makeGetRequest() {
    axios
      .get(
        `https://xyz.api.here.com/hub/spaces/${process.env.GATSBY_HERE_SPACEID}/iterate?access_token=${process.env.GATSBY_HERE_ACCESSTOKEN}`
      )
      .then(function (response) {
        let data = [];
        console.log(response.data);
        response.data.features.forEach((element) => {
          let temp = element.properties;
          data.push(temp);
        });
        sethereData(data);
        console.log(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <DataTable
      title="Tablular view"
      columns={columns}
      data={hereData}
      striped
      highlightOnHover
      pagination
      customStyles={customStyles}

      // theme="solarized"
    />
  );
};

export default RecordTable;
