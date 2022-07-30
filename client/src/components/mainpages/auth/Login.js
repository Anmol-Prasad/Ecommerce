import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Navbar from "../../navbar/Navbar";

const useStyle = makeStyles((theme) => ({
  welcome: {
    width: "35%",
    paddingTop: "17.5px",
    fontFamily: "Londrina Solid",
    fontSize: "27.5px",
    paddingLeft: "25px",
    color: "white",
  },
  loginbox: {
    width: "100%",
    backgroundColor: "#333",
    borderTopLeftRadius: "20px",
    borderTopRightRadius: "20px",
    boxShadow: " 0 0 25px 0px grey",
  },
  logininfo: {
    width: "100%",
    display: "flex",
  },
  logintext: {
    marginLeft: "15%",
    width: "250px",
    marginBottom: "20px",
  },
  buttonbox: {
    margin: "20px",
    marginBottom: "30px",
    paddingLeft: "15.0%",
  },
  loginbtn: {
    backgroundColor: "lightgreen",
    marginRight: "40px",
  },
  burger: {
    width: "40%",
    paddingTop: "17.5px",
    fontSize: "25px",
    fontFamily: "Permanent Marker",
    paddingLeft: "10px",
    color: "white",
  },
  box: {
    width: "350px",
    margin: "auto",
    marginTop: "10%",
    [theme.breakpoints.down("md")]: {
      marginTop: "45%",
    },
    borderRadius: "20px",
    boxShadow: " 0 0 25px 0px grey",
  },
  textbox: {
    display: "flex",
    height: "70px",
  },
}));

const Login = () => {
  const classes = useStyle();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const loginSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/user/login", {
        ...user,
      });

      localStorage.setItem("firstLogin", true);

      window.location.href = "/";
      alert("Logged In");
    } catch (err) {
      alert(err.response.data.msg);
    }
  };
  return (
    <>
      <Navbar />
      <div className={classes.box}>
        <div className={classes.loginbox}>
          <div className={classes.textbox}>
            <div className={classes.welcome}>Welcome to </div>

            <div className={classes.burger}>BURGERSHOT </div>
          </div>
        </div>
        <div className={classes.logininfo}>
          <form onSubmit={loginSubmit}>
            <h2 style={{ paddingLeft: "20px" }}>Login</h2>
            <TextField
              type="email"
              name="email"
              required
              placeholder="Email"
              value={user.email}
              onChange={onChangeInput}
              className={classes.logintext}
            />

            <TextField
              type="password"
              name="password"
              required
              autoComplete="on"
              placeholder="Password"
              value={user.password}
              onChange={onChangeInput}
              className={classes.logintext}
            />

            <div className={classes.buttonbox}>
              <Button
                type="submit"
                variant="contained"
                className={classes.loginbtn}
              >
                Login
              </Button>
              <Link to="/register" style={{ textDecoration: "none" }}>
                <Button variant="contained">Signup</Button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
