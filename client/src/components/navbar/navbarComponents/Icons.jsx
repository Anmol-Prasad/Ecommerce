// import PersonSharpIcon from "@material-ui/icons/PersonSharp";
// import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallSharp";
// import CancelIcon from "@material-ui/icons/Cancel";
import { Box, Button, Badge } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import DrawerComponent from "./Drawer.jsx";
// import { Link } from "react-router-dom";
import { useContext } from "react";
import { GlobalState } from "../../../GlobalState.js";
import DrawerAdminComponent from "./DrawerAdmin.jsx";
// import axios from "axios";

const useStyle = makeStyles((theme) => ({
  box: {
    display: "flex",
    border: "2px solid red",
  },
  icons: {
    margin: "0 40px 0 auto",
    fontSize: "px",
    display: "flex",
    [theme.breakpoints.down("md")]: {
      margin: "0 0 0 auto",
      padding: 0,
      fontSize: "10px",
    },
  },
  iconslit: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  iconslist: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  menu: {
    display: "none",
    paddingTop: "10.5px",
    [theme.breakpoints.down("md")]: {
      display: "inline",
      margin: "0 0 0 auto",
      paddingLeft: "100",
      marginLeft: "15%",
    },
  },
  search: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "inline",
      fontSize: "20px",
    },
  },
  comp: {
    marginTop: "35px",
  },
}));

const Icons = () => {
  const classes = useStyle();
  const state = useContext(GlobalState);
  // const [isLogged] = state.userAPI.isLogged;
  const [isAdmin] = state.userAPI.isAdmin;
  const [cart] = state.userAPI.cart;

  // const adminRouter = () => {
  //   return <></>;
  // };
  // const logoutUser = async () => {
  //   await axios.get("/user/logout");
  //   localStorage.removeItem("firstLogin");
  //   window.location.href = "/";
  // };

  // const loggedRouter = () => {
  //   return (
  //     <>
  //       {isAdmin ? (
  //         " "
  //       ) : (
  //         <Link to="/" onClick={logoutUser}>
  //           <CancelIcon
  //             style={{ color: "white", fontSize: "25px", marginTop: "15px" }}
  //           />
  //         </Link>
  //       )}
  //     </>
  //   );
  // };

  return (
    <>
      <Box className={classes.icons}>
        {isAdmin ? (
          <DrawerAdminComponent style={{ color: "white", fontSize: "25px" }} />
        ) : (
          <Button className={classes.iconslist}>
            <Badge
              color="secondary"
              badgeContent={cart.length}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              style={{
                paddingBottom: "50px",
                marginTop: "50px",
                paddingRight: "10px",
              }}
              overlap="circular"
            >
              <DrawerComponent />
            </Badge>
          </Button>
        )}

        <Button className={classes.menu}>
          <DrawerComponent />
        </Button>
      </Box>
    </>
  );
};

export default Icons;
