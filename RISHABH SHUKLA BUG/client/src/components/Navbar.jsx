import React, { useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { NavLink } from "react-router-dom";
import { Context } from "../Store";
import { useCookies } from "react-cookie";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const [state, dispatch] = useContext(Context);

  useEffect(() => {
    console.log(window.location.pathname.includes("hospital"));
  }, []);

  const handleClick = () => {
    setCookie("token", "", { path: "/", expires: 0 });
    window.location = "/";
  };

  return (
    <div className={classes.root + " nav-wrapper"}>
      <AppBar
        position="static"
        style={{ backgroundColor: state.isHospital ? "#b23d10" : "#4573b9" }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <NavLink to="/">Sewak</NavLink>
          </Typography>
          <NavLink to="/hospital/all">
            <Button color="inherit">All Hospitals</Button>
          </NavLink>
          |
          {state.isAuth ? (
            <NavLink
              to={
                state.isHospital
                  ? `/hospital/profile/${state.hospitalData._id}`
                  : `/user/profile/${state.userData._id}`
              }
            >
              <Button color="inherit">
                Logged in as{" "}
                {state.isHospital
                  ? state.hospitalData.name
                  : state.userData.name}
              </Button>
            </NavLink>
          ) : (
            <NavLink to="/user/auth">
              <Button color="inherit">Login as User</Button>{" "}
            </NavLink>
          )}
          {state.isHospital ? <>|</> : null}
          {state.isHospital ? (
            <NavLink to={`/hospital/profile/edit/${state.hospitalData._id}`}>
              <Button color="inherit">Edit Profile</Button>
            </NavLink>
          ) : null}
          |
          {state.isAuth ? (
            <Button onClick={handleClick} color="inherit">
              Logout
            </Button>
          ) : (
            <NavLink to="/hospital/auth">
              <Button color="inherit">Login as Hospital</Button>{" "}
            </NavLink>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
