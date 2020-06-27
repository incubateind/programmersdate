import React, { useState, useContext, useReducer } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Context } from "../Store";
import { Redirect } from "react-router";
import {
  TextField,
  Paper,
  Button,
  Checkbox,
  Typography,
  Snackbar,
} from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import EmailIcon from "@material-ui/icons/Email";
import AccountCircle from "@material-ui/icons/AccountCircle";
import AddressIcon from "@material-ui/icons/Home";
import CreateIcon from "@material-ui/icons/Create";
import TelephoneIcon from "@material-ui/icons/Phone";
import image from "../assets/dashboard.svg";
import { Alert } from "@material-ui/lab";

export default function HospitalProfileEdit({ match }) {
  const [open, setOpen] = React.useState(false);

  const [values, setValues] = useState({
    email: "",
    name: "",
    address: "",
    telephone: "",
    description: "",
    beds: 0,
    isAcceptingCovidPatients: true,
    isAcceptingNonCovidPatients: true,
    isCovidDedicated: true,
    isOfferingFullMedicalCare: true,
    isVerified: true,
    staffCount: 0,
    testsAvailable: 0,
    totalPatients: 0,
    ventilatorCount: 0,
  });
  const [trigger, toggleTrigger] = useState(false);
  const [state, dispatch] = useContext(Context);
  useEffect(() => {
    if (state.isHospital) {
      const {
        email,
        name,
        address,
        telephone,
        description,
        beds,
        isAcceptingCovidPatients,
        isAcceptingNonCovidPatients,
        isCovidDedicated,
        isOfferingFullMedicalCare,
        isVerified,
        staffCount,
        testsAvailable,
        totalPatients,
        ventilatorCount,
      } = state.hospitalData;
      setValues({
        email,
        name,
        address,
        telephone,
        description,
        beds,
        isAcceptingCovidPatients,
        isAcceptingNonCovidPatients,
        isCovidDedicated,
        isOfferingFullMedicalCare,
        isVerified,
        staffCount,
        testsAvailable,
        totalPatients,
        ventilatorCount,
      });
    }
  }, [state.hospitalData, trigger]);
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  if (state.isLoading) return "Loading...";
  if (!state.isHospital || state.hospitalData._id !== match.params.id)
    return <Redirect to="/" />;
  const handleOnchange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleOnCheckboxchange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.checked });
  };
  return (
    <div>
      <Paper
        variant="elevation"
        style={{
          borderRadius: "10px",
          padding: "20px 10px",
          position: "absolute",
          left: "50%",
          //   top: "50%",
          margin: "60px 0px",
          transform: "translate(-50%, 0%)",
        }}
      >
        <div style={{ padding: "10px 20%", marginBottom: 30 }}>
          <img src={image} alt="edit" style={{ width: "100%" }} />
          <Typography
            variant="h4"
            style={{
              textAlign: "center",
              margin: "30px 0px 0px 0px",
              color: "#0000009c",
            }}
            display="block"
          >
            Hospital Dashboard
          </Typography>
        </div>
        <div
          style={{
            padding: "20px 10px",
            display: "flex",
            justifyContent: "center",
            borderBottom: "#00000073 0.4px solid",
            marginBottom: 22,
          }}
        >
          <div style={{ padding: 10, width: 350 }}>
            <div className="create-form-element">
              <div className="hospital-register-input-wrapper">
                <TextField
                  label="Email"
                  InputProps={{
                    startAdornment: <EmailIcon position="start" />,
                    name: "email",
                  }}
                  value={values.email}
                  onChange={handleOnchange}
                />
                <TextField
                  label="Name"
                  InputProps={{
                    startAdornment: <AccountCircle position="start" />,
                    name: "name",
                  }}
                  value={values.name}
                  onChange={handleOnchange}
                />
              </div>
            </div>
            <div className="create-form-element">
              <div className="hospital-register-input-wrapper">
                <TextField
                  label="Address"
                  InputProps={{
                    startAdornment: <AddressIcon position="start" />,
                    name: "address",
                  }}
                  value={values.address}
                  onChange={handleOnchange}
                />
                <TextField
                  label="Description"
                  InputProps={{
                    startAdornment: <CreateIcon position="start" />,
                    name: "description",
                  }}
                  value={values.description}
                  onChange={handleOnchange}
                />
              </div>
            </div>
            <div className="create-form-element">
              <div className="hospital-register-input-wrapper">
                <TextField
                  label="Telephone"
                  InputProps={{
                    startAdornment: <TelephoneIcon position="start" />,
                    name: "telephone",
                  }}
                  value={values.telephone}
                  onChange={handleOnchange}
                />
                <TextField
                  label="Ventilator Count"
                  InputProps={{
                    name: "ventilatorCount",
                  }}
                  value={values.ventilatorCount}
                  onChange={handleOnchange}
                  type="number"
                />
              </div>
            </div>
            <div className="create-form-element">
              <div className="hospital-register-input-wrapper">
                <TextField
                  label="Beds"
                  InputProps={{
                    name: "beds",
                  }}
                  value={values.beds}
                  onChange={handleOnchange}
                  type="number"
                />
                <TextField
                  label="Tests Available"
                  InputProps={{
                    name: "testsAvailable",
                  }}
                  value={values.testsAvailable}
                  onChange={handleOnchange}
                  type="number"
                />
              </div>
            </div>
            <div className="create-form-element">
              <div className="hospital-register-input-wrapper">
                <TextField
                  label="Total Patients"
                  InputProps={{
                    name: "totalPatients",
                  }}
                  value={values.totalPatients}
                  onChange={handleOnchange}
                  type="number"
                />
                <TextField
                  label="Total Staff"
                  InputProps={{
                    name: "staffCount",
                  }}
                  value={values.staffCount}
                  onChange={handleOnchange}
                  type="number"
                />
              </div>
            </div>
          </div>
          <div
            style={{
              padding: 10,
              display: "flex",
              justifyContent: "flex-end",
              flexDirection: "column",
            }}
            className="dashboard-checkbox-wrapper"
          >
            <div>
              <Typography variant="body1" display="block">
                Is this a COVID dedicated hospital?{" "}
                <Checkbox
                  onChange={handleOnCheckboxchange}
                  checked={values.isCovidDedicated}
                  color="primary"
                  inputProps={{
                    "aria-label": "secondary checkbox",
                    name: "isCovidDedicated",
                  }}
                />
              </Typography>
            </div>
            <div>
              <Typography variant="body1" display="block">
                Is this accepting COVID patients?
                <Checkbox
                  onChange={handleOnCheckboxchange}
                  checked={values.isAcceptingCovidPatients}
                  color="primary"
                  inputProps={{
                    "aria-label": "secondary checkbox",
                    name: "isAcceptingCovidPatients",
                  }}
                />
              </Typography>
            </div>
            <div>
              <Typography variant="body1" display="block">
                Is this accepting non-COVID patients?
                <Checkbox
                  onChange={handleOnCheckboxchange}
                  checked={values.isAcceptingNonCovidPatients}
                  color="primary"
                  inputProps={{
                    "aria-label": "secondary checkbox",
                    name: "isAcceptingNonCovidPatients",
                  }}
                />
              </Typography>
            </div>
            <div>
              <Typography variant="body1" display="block">
                Is this offering full medical care to patients?
                <Checkbox
                  onChange={handleOnCheckboxchange}
                  checked={values.isOfferingFullMedicalCare}
                  color="primary"
                  inputProps={{
                    "aria-label": "secondary checkbox",
                    name: "isOfferingFullMedicalCare",
                  }}
                />
              </Typography>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            variant="outlined"
            color="primary"
            onClick={() => {
              axios
                .post(`/api/hospital/profile/edit/${match.params.id}`, {
                  updated: values,
                })
                .then((res) => {
                  console.log(res.data);
                  dispatch({
                    type: "UPDATE_HOSPITAL",
                    payload: {
                      hospitalData: res.data.data,
                    },
                  });
                  toggleTrigger(!trigger);
                  handleClick();
                })
                .catch((err) => console.error(err));
            }}
          >
            Update
          </Button>
          <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              Changes has been updated
            </Alert>
          </Snackbar>
        </div>
      </Paper>
    </div>
  );
}
