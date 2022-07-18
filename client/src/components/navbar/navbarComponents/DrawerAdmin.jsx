import React, { useState } from "react";
import { Link } from "react-router-dom";
import CancelIcon from "@material-ui/icons/Cancel";
import PersonSharpIcon from "@material-ui/icons/PersonSharp";
import DeleteIcon from "@material-ui/icons/Delete";
import TimelineIcon from "@material-ui/icons/Timeline";
import CreateIcon from "@material-ui/icons/Create";
import axios from "axios";
import { useContext } from "react";
import { GlobalState } from "../../../GlobalState";
import {
  List,
  ListItem,
  ListItemIcon,
  IconButton,
  ListItemText,
  makeStyles,
  Drawer,
  // Badge,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const DrawerAdminComponent = () => {
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
  const logoutUser = async () => {
    await axios.get("/user/logout");
    localStorage.removeItem("firstLogin");
    window.location.href = "/";
  };
  const classes = useStyles();
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
                <Link to="/orders">
                  <TimelineIcon
                    style={{
                      color: "white",
                      fontSize: "25px",
                      display: "inline",
                      padding: "3px 20px 10px 10px ",
                    }}
                  />
                </Link>
                <Link to="/orders" className={classes.cart}>
                  <ListItemText style={{ color: "white", textAlign: "right" }}>
                    Orders
                  </ListItemText>
                </Link>
              </ListItemIcon>
            </ListItem>
            <ListItem button onClick={() => setOpenDrawer(false)}>
              <ListItemIcon>
                <Link to="/create_product">
                  <CreateIcon
                    style={{
                      color: "white",
                      fontSize: "25px",
                      display: "inline",
                      padding: "3px 20px 10px 10px ",
                    }}
                  />
                </Link>
                <Link to="/create_product" className={classes.cart}>
                  <ListItemText style={{ color: "white", textAlign: "right" }}>
                    Create Product
                  </ListItemText>
                </Link>
              </ListItemIcon>
            </ListItem>

            <ListItem button onClick={() => setOpenDrawer(false)}>
              <ListItemIcon>
                <Link to="/viewall">
                  <DeleteIcon
                    style={{
                      color: "white",
                      fontSize: "25px",
                      display: "inline",
                      padding: "3px 20px 10px 10px ",
                    }}
                  />
                </Link>
                <Link to="/viewall" className={classes.cart}>
                  <ListItemText style={{ color: "white", textAlign: "right" }}>
                    Delete Product
                  </ListItemText>
                </Link>
              </ListItemIcon>
            </ListItem>
            <ListItem button onClick={() => setOpenDrawer(false)}>
              {isLogged ? (
                <ListItemIcon>
                  <Link to="/">
                    <CancelIcon
                      style={{
                        color: "white",
                        fontSize: "25px",
                        display: "inline",
                        padding: "3px 20px 10px 10px ",
                      }}
                      onClick={logoutUser}
                    />
                  </Link>
                  <Link to="/" className={classes.cart}>
                    <ListItemText
                      style={{ color: "white", textAlign: "right" }}
                      onClick={logoutUser}
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

export default DrawerAdminComponent;
