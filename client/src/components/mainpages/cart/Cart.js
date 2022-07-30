import React, { useContext, useState, useEffect } from "react";
import { GlobalState } from "../../../GlobalState";
import { Box, Button, makeStyles } from "@material-ui/core";
import Alert from "@mui/material/Alert";
import { Link } from "react-router-dom";
import EmptyCart from "../Images/EmptyCart.svg";
import Navbar from "../../navbar/Navbar";
import axios from "axios";

const useStyle = makeStyles((theme) => ({
  cartbox: {
    marginTop: "100px",
    margin: "auto",
    height: "90vh",
    width: "90%",
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    [theme.breakpoints.down("md")]: {
      marginTop: "150px",
    },
    backgroundColor: "rgb(248,246,243)",
    // border: "2px solid red",
  },
  checkout: {
    width: "300px",
    height: "300px",
    backgroundColor: "white",
    marginTop: "3.5%",
    border: "2px solid rgb(248,246,243)",
  },
  cartlist: {
    width: "600px",
    height: "auto",
  },
  cart: {
    width: "350px",
    height: "165.0px",
    margin: "auto",
    marginTop: "20px",
    display: "flex",
    [theme.breakpoints.down("md")]: {
      width: "325px",
    },
    borderRadius: "10px",
    boxShadow: " 0 0 25px 0px grey",
  },
  sidebox: {
    height: "84.5%",
    width: "40%",
    [theme.breakpoints.down("md")]: {
      width: "35.0%",
    },
    backgroundColor: "pink",
  },
  imgbox: {
    height: "100%",
    width: "100%",
    borderTopLeftRadius: "10px",
  },
  button: {
    height: "17.5%",
    display: "flex",
    [theme.breakpoints.down("md")]: {
      // width: "25.0%",
    },
  },
  buttonstyle: {
    width: "10px",
    backgroundColor: "white",
  },
  contentbox: {
    width: "72.5%",
    height: "100%",
  },
  title: {
    width: "90%",
    margin: "auto",
    height: "50px",
    fontFamily: "Londrina Solid",
    fontSize: "20px",
    padding: "5px",
    paddingLeft: "15px",
    lineHeight: "40px",

    [theme.breakpoints.down("md")]: {
      lineHeight: "25.0px",
      marginTop: "10px",
    },
  },
  img: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: "10px",
  },
  pricebox: {
    width: "100%",
    height: "auto",
    display: "flex",
    padding: "0.5px",
  },
  price: {
    width: "50%",
    height: "100%",
    fontSize: "20px",
    fontWeight: "bold",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      width: "50.0%",
      // padding: "4px",
    },
  },
  actualprice: {
    width: "50%",
    height: "100%",
    fontSize: "20px",
    textDecoration: "line-through",
    color: "red",
    padding: "0px",
    paddingLeft: "10px",
  },
  discount: {
    width: "40%",
    height: "100%",
    padding: "5px",
    color: "green",
    fontSize: "20px",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  brand: {
    width: "90%",
    margin: "auto",
    height: "50px",
    textAlign: "center",
    fontFamily: "Permanent Marker",
    paddingTop: "50px",
    fontSize: "50px",
    [theme.breakpoints.down("md")]: {
      paddingTop: "20px",
    },
  },
  span: {
    fontFamily: "Poiret One",
    fontWeight: "bolder",
    paddingTop: "40.0px",
    textAlign: "center",
    fontSize: "17.50px",
    [theme.breakpoints.down("md")]: {
      paddingTop: "60px",
    },
  },
  plusbutton: {
    backgroundColor: "lightgreen",
    marginRight: "4px",
    [theme.breakpoints.down("md")]: {
      marginRight: "1px",
    },
  },
  minusbutton: {
    backgroundColor: "#FF6666",
  },
  emptycart: {
    maxWidth: "610px",
    height: "600px",
    margin: "auto",
    marginTop: "150px",
    display: "flex",
    flexWrap: "wrap",
    [theme.breakpoints.down("md")]: {
      marginTop: "110px",
    },
  },
  svgimg: {
    width: "300px",
    height: "300px",
    margin: "auto",
    [theme.breakpoints.down("md")]: {
      height: "220px",
    },
  },
  emptytextbox: {
    width: "300px",
    height: "300px",
    margin: "auto",
    [theme.breakpoints.down("md")]: {
      marginTop: "-20px",
    },
  },
  emptytext: {
    height: "60%",
    width: "auto",
    [theme.breakpoints.down("md")]: {
      height: "52.50%",
    },
  },
  svg: {
    height: "280px",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      height: "220px",
      width: "80%",
      paddingLeft: "40px",
    },
  },
  homebutton: {
    textAlign: "center",
  },
  box: {
    width: "100%",
    marginTop: "20px",
    textAlign: "center",
  },
  total: {
    width: "25px",
    marginLeft: "5.0%",
  },
  cartle: {
    alignItems: "center",
    // border: "2px solid red",
    fontSize: "30.0px",
    width: "320px",
    margin: "auto",
    marginTop: "12.50px",
    textAlign: "center",
    fontFamily: "Permanent Marker",
  },
  checkbox: {
    width: "90%",
    margin: "auto",

    marginTop: "5px",
    marginBottom: "5px",
    fontSize: "25px",
    textAlign: "center",
    padding: "7.5px",
    fontWeight: "600",
  },
  inputbox: {
    width: "80%",
    marginLeft: "22.50px",
    height: "70px",
    // borderRadius: "5px",
    border: "2px solid white",
    paddingLeft: "10px",
    fontSize: "13px",
    marginTop: "8px",
    marginBottom: "2.5px",
    boxShadow: " 0 0 2.5px 0px lightgrey",
  },
  totalbox: {
    display: "flex",
    width: "90%",
    margin: "auto",
    marginTop: "15.0px",
    marginBottom: "10px",
  },
  grandtotal: {
    width: "50%",
    // border: "2px solid red",
    padding: "5px",
    fontSize: "20px",
    textAlign: "center",
  },
  grandamount: {
    width: "50%",
    padding: "5px",
    fontSize: "25px",
    textAlign: "center",
  },
  paybutton: {
    width: "80%",
    margin: "auto",
    backgroundColor: "#333",
    color: "white",
    padding: "5px",
    textAlign: "center",
    fontSize: "17.5px",
    marginLeft: "30px",
    fontWeight: "lighter",
    marginTop: "10px",
  },
}));

const Cart = () => {
  const classes = useStyle();
  const state = useContext(GlobalState);
  const [cart, setCart] = state.userAPI.cart;
  const [token] = state.token;
  const [total, setTotal] = useState(0);
  const [address, setAddress] = useState({
    address: "",
  });

  useEffect(() => {
    const getTotal = () => {
      const total = cart.reduce((prev, item) => {
        return prev + item.cost * item.quantity;
      }, 0);

      setTotal(total);
    };

    getTotal();
  }, [cart]);
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  const payment = (cart, total, address) => {
    const url = "http://localhost:8000/user/payment";
    if (address.length > 5) {
      displayRazorPay(total);
      axios.post(
        url,
        { cart, total, address },
        {
          headers: { Authorization: token },
        }
      );
      console.log(address);
    } else {
      alert("Please add the shipping address");
    }

    <Alert severity="success">You have successfully placed an order!</Alert>;

    // console.log(cart, total);

    // alert("Chal be lodu");
    // // setCart([]);
    // addToCart([]);
  };

  const displayRazorPay = (total) => {
    const url = "http://localhost:8000/razorpay";
    axios.post(url, { payamount: total }).then((res) => {
      console.log(res);
      var options = {
        key: "rzp_test_3uJqa7IxWduRnK",
        amount: total * 100,
        name: "Burgershot",
        description: "Test Transaction",
        image:
          "https://i1.sndcdn.com/artworks-NeU2FE7rq2WKBCLF-CAqMgA-t500x500.jpg",
        order_id: res.data.id,
        callback_url: "http://localhost:8000/paydone",
        theme: {
          color: "#3399cc",
        },
      };
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    });
  };

  const addToCart = async (cart) => {
    await axios.patch(
      "/user/addcart",
      { cart },
      {
        headers: { Authorization: token },
      }
    );
  };
  const increment = (id) => {
    cart.forEach((item) => {
      if (item._id === id) {
        item.quantity += 1;
      }
    });

    setCart([...cart]);
    addToCart(cart);
  };

  const decrement = (id) => {
    cart.forEach((item) => {
      if (item._id === id) {
        item.quantity === 1 ? (item.quantity = 1) : (item.quantity -= 1);
      }
    });

    setCart([...cart]);
    addToCart(cart);
  };

  const removeProduct = (id) => {
    if (window.confirm("Do you want to delete this product?")) {
      cart.forEach((item, index) => {
        if (item._id === id) {
          cart.splice(index, 1);
        }
      });

      setCart([...cart]);
      addToCart(cart);
    }
  };

  if (cart.length === 0)
    return (
      <>
        <Navbar />
        <Box className={classes.emptycart}>
          <div className={classes.svgimg}>
            <img src={EmptyCart} alt="" className={classes.svg}></img>
          </div>
          <div className={classes.emptytextbox}>
            <div className={classes.emptytext}>
              <div className={classes.brand}>OOPS !!</div>
              <div className={classes.span}>The Cart is Empty </div>
            </div>
            <div className={classes.homebutton}>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Button className={classes.plusbutton}>Shop Now</Button>
              </Link>
            </div>
          </div>
        </Box>
      </>
    );
  else {
    return (
      <>
        <Navbar />
        <Box className={classes.cartbox}>
          <div className={classes.checkout}>
            <div className={classes.checkbox}>CHECKOUT </div>
            <input
              type="text"
              placeholder="Enter your Shipping Address"
              className={classes.inputbox}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
            <div className={classes.totalbox}>
              <div className={classes.grandtotal}>Grand Total</div>
              <div className={classes.grandamount}>₹ {total}</div>
            </div>
            <Button
              className={classes.paybutton}
              id="rzp-button1"
              onClick={() => payment(cart, total, address)}
            >
              PAY
            </Button>
          </div>
          <div className={classes.cartlist}>
            <div className={classes.cartle}>My Cart</div>
            {cart.map((product) => (
              <div className={classes.cart}>
                <div className={classes.sidebox}>
                  <div className={classes.imgbox}>
                    <img src={product.url} className={classes.img} alt="" />
                  </div>
                  <div className={classes.button}>
                    <Button
                      style={{
                        maxWidth: "45px",
                        maxHeight: "25px",
                        minWidth: "45px",
                        minHeight: "25px",
                      }}
                      className={classes.plusbutton}
                      onClick={() => increment(product._id)}
                    >
                      +
                    </Button>
                    <div className={classes.total}>{product.quantity}</div>
                    <Button
                      style={{
                        maxWidth: "45px",
                        maxHeight: "25px",
                        minWidth: "45px",
                        minHeight: "25px",
                      }}
                      className={classes.minusbutton}
                      onClick={() => decrement(product._id)}
                    >
                      -
                    </Button>
                  </div>
                </div>
                <div className={classes.contentbox}>
                  <div className={classes.title}>{product.title}</div>
                  <div className={classes.pricebox}>
                    <div className={classes.price}>
                      ₹ {product.cost * product.quantity}
                    </div>
                    <div className={classes.actualprice}>
                      ₹ {product.mrp * product.quantity}
                    </div>
                  </div>
                  <div className={classes.box}>
                    <Button
                      className={classes.minusbutton}
                      onClick={() => removeProduct(product._id)}
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Box>
      </>
    );
  }
};

export default Cart;
