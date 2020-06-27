import React, { useRef, useEffect, useState, useContext } from "react";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { useCookies } from "react-cookie";
import { TextField, Paper, InputAdornment } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { Context } from "../Store";
import image from "../assets/hospital_register.svg";
import { Redirect } from "react-router-dom";
import AccountCircle from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import AddressIcon from "@material-ui/icons/Home";
import CreateIcon from "@material-ui/icons/Create";
import LocationSearchingIcon from "@material-ui/icons/LocationSearching";

export default function AlertDialogSlide(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setname] = useState("");
  const [location, setlocation] = useState({ latitude: "", longitude: "" });
  const [address, setaddress] = useState("");
  const [telephone, settelephone] = useState("");
  const [beds, setBeds] = useState(0);
  // const [type, setType] = useState([]);
  const [description, setDescription] = useState("");
  // const [image, setImage] = useState("");
  const [error, setError] = useState(undefined);
  const [cookies, setCookie] = useCookies(["token"]);
  const [state, dispatch] = useContext(Context);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {}, []);

  const verifyLogin = () => {
    if (
      email == "" ||
      password == "" ||
      name == "" ||
      address == "" ||
      telephone == 0 ||
      description == ""
    )
      return setError("Please Fill the required fields");
    axios
      .post("/api/hospital/register", {
        email,
        password,
        name,
        location,
        address,
        telephone,
        beds,
        // type,
        description,
      })
      .then((response) => {
        if (response.status !== 200) {
          setError(response.data.message);
          return;
        }
        setCookie("token", response.data.token, { path: "/" });
        console.log(state);
        dispatch({
          type: "HOSPITAL_REGISTER",
          payload: {
            isAuth: true,
            hospital: response.data.hospital,
            isHospital: true,
          },
        });
        setRedirect(true);
      })
      .catch((err) => {
        // console.log(err);
        if (
          err &&
          err.response &&
          err.response.data &&
          err.response.data.message
        )
          setError(err.response.data.message);
      });
  };

  const onEmailInputChange = (event) => {
    setEmail(event.target.value);
  };
  const onPasswordInputChange = (event) => {
    setPassword(event.target.value);
  };

  const onNameInputChange = (event) => {
    setname(event.target.value);
  };
  const onlocationInputChange = (event) => {
    setlocation(event.target.value);
  };
  const onaddressInputChange = (event) => {
    setaddress(event.target.value);
  };
  const ontelephoneInputChange = (event) => {
    settelephone(event.target.value);
  };
  const onBedInputChange = (event) => {
    setBeds(event.target.value);
  };
  const onDescriptionInputChange = (event) => {
    setDescription(event.target.value);
  };
  if (redirect) return <Redirect to="/" />;
  return (
    <div>
      <div className="absolute-center">
        <Paper
          style={{ borderRadius: "10px", padding: "20px 10px" }}
          variant="outlined"
        >
          <div className="create-form">
            <div className="create-form-element">
              <img src={image} alt="create svg" style={{ width: "25vw" }} />
            </div>
            {error ? (
              <div className="create-form-element">
                <Alert severity="error">{error}</Alert>
              </div>
            ) : null}
            <div className="create-form-element">
              <div className="hospital-register-input-wrapper">
                <TextField
                  value={email}
                  onChange={onEmailInputChange}
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon />
                      </InputAdornment>
                    ),
                  }}
                  type="email"
                />
                <TextField
                  value={password}
                  onChange={onPasswordInputChange}
                  label="Password"
                  variant="outlined"
                  type="password"
                />
              </div>
            </div>
            <div className="create-form-element">
              <div className="hospital-register-input-wrapper">
                <TextField
                  value={address}
                  onChange={onaddressInputChange}
                  label="address"
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AddressIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  value={name}
                  onChange={onNameInputChange}
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                />
              </div>
            </div>
            <div className="create-form-element">
              <div className="hospital-register-input-wrapper">
                <TextField
                  value={telephone}
                  onChange={ontelephoneInputChange}
                  id="outlined-basic"
                  label="Telephone"
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  value={address}
                  onChange={onaddressInputChange}
                  label="address"
                  variant="outlined"
                />
              </div>
            </div>
            <div className="create-form-element">
              <div className="hospital-register-input-wrapper">
                <TextField
                  value={description}
                  onChange={onDescriptionInputChange}
                  id="outlined-basic"
                  label="Description"
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <CreateIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  value={beds}
                  onChange={onBedInputChange}
                  label="Beds"
                  variant="outlined"
                  type="integer"
                />
              </div>
            </div>
            <div className="create-form-element">
              <div className="hospital-register-input-wrapper">
                <TextField
                  value={location.latitude}
                  onChange={onDescriptionInputChange}
                  id="outlined-basic"
                  label="Latitude"
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocationSearchingIcon
                          style={{ cursor: "pointer" }}
                          onClick={() =>
                            navigator.geolocation.getCurrentPosition(
                              (pos) =>
                                setlocation({
                                  latitude: pos.coords.latitude,
                                  longitude: pos.coords.longitude,
                                }),
                              (e) => setError(e.message),
                              {
                                enableHighAccuracy: true,
                                timeout: 5000,
                                maximumAge: 0,
                              }
                            )
                          }
                        />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  value={location.longitude}
                  onChange={onBedInputChange}
                  label="Longitute"
                  variant="outlined"
                  type="integer"
                />
              </div>
            </div>
            <div className="create-form-element">
              <Button onClick={verifyLogin} color="primary">
                Register
              </Button>
            </div>
          </div>
        </Paper>
      </div>
    </div>
  );
}
