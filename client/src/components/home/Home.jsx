import Navbar from "../navbar/Navbar";
import Slider from "../mainpages/products/Slider";
import Slide2 from "../mainpages/products/Slider2";
import Nav from "../Nav";
import Banner from "../banner/Banner.jsx";
import { useContext } from "react";
import { GlobalState } from "../../GlobalState";
// import { Link } from "react-router-dom";
import Admin from "./Admin";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  pc: {
    display: "block",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  mob: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  },
}));

const Home = () => {
  const state = useContext(GlobalState);
  const classes = useStyle();
  // const [isLogged] = state.userAPI.isLogged;
  const [isAdmin] = state.userAPI.isAdmin;

  // const adminRouter = () => {
  //   return (
  //     <>
  //       <li>
  //         <Link to="/create_product">Create Product</Link>
  //       </li>
  //       <li>
  //         <Link to="/category">Categories</Link>
  //       </li>
  //     </>
  //   );
  // };
  // const loggedRouter = () => {
  //   return (
  //     <>
  //       <li>
  //         <Link to="/history">History</Link>
  //       </li>
  //       <li>
  //         <Link to="/">Logout</Link>
  //       </li>
  //     </>
  //   );
  // };
  console.log(isAdmin);
  // alert(isAdmin);
  return (
    <>
      <Navbar />
      {isAdmin ? <Admin /> : " "}
      <Nav />

      <Banner />
      <div className={classes.pc}>
        <Slider />
      </div>
      <div className={classes.mob}>
        <Slide2 />
      </div>
    </>
  );
};

export default Home;
