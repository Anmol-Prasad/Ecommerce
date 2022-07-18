import React, { useState } from "react";
import { Link } from "react-router-dom";
import LocalMallSharp from "@material-ui/icons/LocalMallSharp";
import PersonSharpIcon from "@material-ui/icons/PersonSharp";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import CancelIcon from "@material-ui/icons/Cancel";
import axios from "axios";
import {
  List,
  ListItem,
  ListItemIcon,
  IconButton,
  ListItemText,
  makeStyles,
  Drawer,
  Badge,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { useContext } from "react";
import { GlobalState } from "../../../GlobalState";

const DrawerComponent = () => {
  const useStyles = makeStyles((theme) => ({
    cart: {
      textDecoration: "none",
    },
    root: {
      color: "white",
    },
    list: {
      width: "250px",
      backgroundColor: "#333",
      color: "white",
    },
    iconButtonContainer: {
      marginLeft: "auto",
      color: "white",
      width: "40%",
    },
    drawerContainer: {
      backgroundColor: "#333",
      color: "white",
    },
    menuIconToggle: {
      color: "white",
      fontSize: "29px",
    },
  }));

  const [openDrawer, setOpenDrawer] = useState(false);
  const state = useContext(GlobalState);
  const [isLogged] = state.userAPI.isLogged;
  //Css
  const classes = useStyles();
  const [cart] = state.userAPI.cart;
  const logoutUser = async () => {
    await axios.get("/user/logout");
    localStorage.removeItem("firstLogin");
    window.location.href = "/";
  };
  return (
    <>
      <Drawer
        anchor="right"
        classes={{ paper: classes.drawerContainer }}
        onClose={() => setOpenDrawer(false)}
        open={openDrawer}
        onOpen={() => setOpenDrawer(true)}
        classname={classes.drawer}
      >
        <div className={classes.list}>
          <List>
            <ListItemIcon>
              <div
                style={{
                  color: "white",
                  textAlign: "right",
                  fontFamily: "Permanent Marker",
                  fontSize: "24px",
                  padding: "5px 0 10px 30px",
                }}
              >
                SIDES
              </div>
            </ListItemIcon>
            <ListItem button onClick={() => setOpenDrawer(false)}>
              <ListItemIcon>
                <Link to="/Cart">
                  <Badge color="secondary" badgeContent={cart.length}>
                    <ShoppingCartIcon
                      style={{
                        color: "white",
                        fontSize: "25px",
                        display: "inline",
                        padding: "3px 0px 10px 10px ",
                      }}
                    />
                  </Badge>
                </Link>
                <Link to="/Cart" className={classes.cart}>
                  <ListItemText
                    style={{
                      color: "white",
                      textAlign: "center",
                      paddingLeft: "20px",
                      textDecoration: "none",
                    }}
                  >
                    MyCart
                  </ListItemText>
                </Link>
              </ListItemIcon>
            </ListItem>
            <ListItem button onClick={() => setOpenDrawer(false)}>
              <ListItemIcon>
                <Link to="/myorders">
                  <LocalMallSharp
                    style={{
                      color: "white",
                      fontSize: "25px",
                      display: "inline",
                      padding: "3px 20px 10px 10px ",
                    }}
                  />
                </Link>
                <Link to="/myorders" className={classes.cart}>
                  <ListItemText style={{ color: "white", textAlign: "right" }}>
                    MyOrders
                  </ListItemText>
                </Link>
              </ListItemIcon>
            </ListItem>
            <ListItem button onClick={() => setOpenDrawer(false)}>
              {isLogged ? (
                <ListItemIcon>
                  <Link to="/" onClick={logoutUser}>
                    <CancelIcon
                      style={{
                        color: "white",
                        fontSize: "25px",
                        display: "inline",
                        padding: "3px 20px 10px 10px ",
                      }}
                    />
                  </Link>
                  <Link to="/" className={classes.cart} onClick={logoutUser}>
                    <ListItemText
                      style={{ color: "white", textAlign: "right" }}
                    >
                      Logout
                    </ListItemText>
                  </Link>
                </ListItemIcon>
              ) : (
                <ListItemIcon>
                  <Link to="/Login">
                    <PersonSharpIcon
                      style={{
                        color: "white",
                        fontSize: "25px",
                        display: "inline",
                        padding: "3px 20px 10px 10px ",
                      }}
                    />
                  </Link>
                  <Link to="/Login" className={classes.cart}>
                    <ListItemText
                      style={{ color: "white", textAlign: "right" }}
                    >
                      Login
                    </ListItemText>
                  </Link>
                </ListItemIcon>
              )}
            </ListItem>
          </List>
        </div>
      </Drawer>
      {/* Since this is inside our toolbar we can push it to the end of the toolbar */}
      <IconButton
        className={classes.iconButtonContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.menuIconToggle} />
      </IconButton>
    </>
  );
};

export default DrawerComponent;
