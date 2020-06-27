import React from "react";
import { HMap } from "./Hmap";
import HospitalCards from "./HospitalCard";
import { Paper, Typography, Button } from "@material-ui/core";
import image from "../assets/map.svg";
import { Link } from "react-router-dom";
const Dashboard = () => {
  const API_URL = "http://localhost:5000/api/hospital/all";
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await fetch(API_URL);
    const res = await response.json();
    setData(res);
    setLoading(false);
    console.log(res);
  };
  if (loading) return "Loading...";
  return (
    <div className="dashboard-outer-wrapper">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img src={image} alt="dash" style={{ width: "42vw" }} />
        <Typography
          variant="h4"
          style={{
            textAlign: "center",
            margin: "30px 0px 0px 0px",
            color: "#0000009c",
          }}
          display="block"
        >
          Welcome to the Sewak!
        </Typography>
      </div>
      <div className="dashboard-wrapper">
        <HMap data={data} loading={loading} />
        <div className="hospital-list-map">
          {/* <Paper variant="elevation"> */}
          {data.map((v, i) => {
            return <HospitalCards props={{ data: v }} key={i} />;
          })}
          {/* </Paper> */}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          paddingBottom: 80,
        }}
      >
        <Link to="/hospital/all">
          <Button variant="outlined" color="primary">
            View All Hospitals
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
