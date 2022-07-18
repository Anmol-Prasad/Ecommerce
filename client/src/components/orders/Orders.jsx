import React from "react";
import { useContext } from "react";
import { GlobalState } from "../../GlobalState";
import Navbar from "../navbar/Navbar";
import { makeStyles } from "@mui/styles";

const Orders = () => {
  const useStyles = makeStyles((theme) => ({
    tablebox: {
      margin: "auto",
      width: "95%",
      marginTop: "2%",
    },
    titlebox: {
      height: "60px",
      fontSize: "19px",
      backgroundColor: "#333",
      fontFamily: "Exo",
      fontWeight: "bolder",
      color: "white",
    },
    addresstitle: {
      minWidth: "270px",
    },
    midtext: {
      textAlign: "center",
      border: "2px solid #333",
      fontSize: "16.5px",
    },
    carttitles: {
      backgroundColor: "#333",
      padding: "5px",
      color: "white",
      fontFamily: "Exo",
    },
    producttitle: {
      minWidth: "200px",
    },
    cartwidth: {
      // backgroundColor: "pink",
      width: "400px",
    },
    minititle: {
      width: "100px",
    },
  }));
  const state = useContext(GlobalState);
  const classes = useStyles();
  const [payments] = state.productsAPI.payments;
  return (
    <div>
      <Navbar />
      <h1 style={{ textAlign: "center", marginTop: "100px" }}>ORDER HISTORY</h1>
      <table className={classes.tablebox}>
        <tr className={classes.titlebox}>
          <th>DATE</th>
          <th>EMAIL</th>
          <th className={classes.cartwidth}>CART</th>
          <th>TOTAL</th>
          <th className={classes.addresstitle}>ADDRESS</th>
          <th style={{ borderTopRightRadius: "15px" }}>SHIPPING STATUS</th>
        </tr>
        {payments.map((val, key) => {
          return (
            <tr key={key}>
              <td className={classes.midtext}>{val.createdAt.split("T")[0]}</td>
              <td className={classes.midtext}>{val.email}</td>
              <td className={classes.midtext}>
                <tr className={classes.carttitles}>
                  <th className={classes.producttitle}>PRODUCT</th>
                  <th className={classes.minititle}>QUANTITY</th>
                  <th className={classes.minititle}>COST</th>
                </tr>

                {val.cart.map((i, key) => {
                  return (
                    <>
                      <tr key={key}>
                        <td>{i.title}</td>
                        <td>{i.quantity}</td>
                        <td>₹{Math.round(i.cost * i.quantity * 100) / 100}</td>
                      </tr>
                    </>
                  );
                })}
              </td>
              <td className={classes.midtext}>₹{val.total}</td>
              <td className={classes.midtext}>{val.address}</td>
              <td className={classes.midtext}>
                <button>DISPATCHED</button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Orders;
