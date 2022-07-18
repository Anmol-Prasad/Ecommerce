import React from "react";
import { AppBar, Toolbar, makeStyles } from "@material-ui/core";
import logo from "./navbarComponents/images/hamburger.png";
import Icons from "./navbarComponents/Icons.jsx";
import { Link } from "react-router-dom";
// import { useContext } from "react";
// import { GlobalState } from "../../GlobalState";

const useStyle = makeStyles((theme) => ({
  header: {
    height: 67.5,
    backgroundColor: "#333",
  },
  logostyle: {
    height: 45,
    width: 50.5,
    padding: 7.5,
    paddingTop: 15,
    paddingRight: 20,
    left: 10,
    textDecoration: "none",
  },
  search: {
    width: "50%",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  title: {
    textDecoration: "none",
    color: "white",
    fontFamily: "Permanent Marker",
    fontSize: 25,
    paddingRight: "15%",
    [theme.breakpoints.down("md")]: {
      paddingRight: "0%",
    },
  },
}));
const Navbar = () => {
  // const state = useContext(GlobalState);
  // const [isAdmin] = state.userAPI.isAdmin;
  const classes = useStyle();
  return (
    <>
      <AppBar className={classes.header}>
        <Toolbar>
          <Link to="/">
            <img src={logo} alt="" className={classes.logostyle}></img>
          </Link>
          <h3 className={classes.title}>BURGERSHOT</h3>

          <div className={classes.search}></div>
          {/* {isAdmin? : } */}
          <Icons />
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Navbar;
