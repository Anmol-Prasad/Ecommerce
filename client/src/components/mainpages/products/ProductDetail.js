import React, { useContext, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { GlobalState } from "../../../GlobalState";
import { Box, makeStyles, Button } from "@material-ui/core";
import Navbar from "../../navbar/Navbar";
// import axios from "axios";

const useStyle = makeStyles({
  box: {
    width: "60%",
    height: "400px",
    display: "flex",
    borderRadius: "10px",
    margin: "auto",
    boxShadow: " 0 0 22px 4px black",
    marginTop: "7.5%",
  },
  imgbox: {
    width: "300px",
    height: "100%",
    marginRight: "20px",
  },
  image: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: "10px",
    borderBottomLeftRadius: "10px",
  },
  contentbox: {
    width: "70%",
    height: "100%",
  },
  titlebox: {
    width: "100%",
    // backgroundColor: "pink",
    height: "20%",
    fontFamily: "Londrina Solid",
    fontSize: "40px",
    padding: "10.5px",
    paddingLeft: "20px",
  },
  descriptionbox: {
    width: "90%",
    marginBottom: "20px",
    height: "32.5%",
    fontFamily: "Poiret One",
    color: "grey",
    fontSize: "17px",
    padding: "15px",
    paddingRight: "100px",
    marginTop: "-20px",
  },
  pricebox: {
    width: "100%",
    height: "20%",
    // backgroundColor: "lightgreen",
    display: "flex",
    marginTop: "-50px",
  },
  price: {
    width: "35.0%",
    height: "100%",
    paddingLeft: "25px",
    fontSize: "35px",
    fontWeight: "bold",
    padding: "15px",
  },
  actualprice: {
    width: "30%",
    height: "100%",
    // paddingLeft: 0px",
    fontSize: "28.5px",
    textDecoration: "line-through",
    color: "red",
    padding: "20px",
  },
  discount: {
    width: "30%",
    height: "100%",
    // backgroundColor: "orange",
    padding: "20px",
    color: "green",
    fontSize: "27.5px",
  },
  cartbox: {
    width: "100%",
    // backgroundColor: "pink",
    height: "30%",
  },
  button: {
    marginLeft: "32.50%",
    marginTop: "15px",
    padding: "10.5px",
    backgroundColor: "lightgreen",
    fontSize: "17.5px",
    width: "200px",
  },
  imageview: {
    height: "170px",
    width: "100px",
    borderTopLeftRadius: "10px",
    borderBottomLeftRadius: "10px",
  },
  component: {
    backgroundColor: "rgb(248,246,243)",
    padding: "10px",
    margin: "10px",
  },
  cartbutton: {
    borderRadius: "10px",
    border: "1.25px solid black",
    color: "black",
    padding: "1px",
    marginLeft: "15.0px",
    backgroundColor: "white",
  },
  textbox: {
    display: "flex",
    paddingBottom: "10px",
    paddingTop: "20px",
    lineHeight: "20px",
  },
  buttonview: {
    marginLeft: "auto",
    backgroundColor: "#333",
    color: "white",
    height: "40px",
  },
  deal: {
    fontSize: "32.5px",
    fontWeight: "600",
    paddingLeft: "10px",
    textAlign: "center",
    fontFamily: "Syne Tactile",
    marginBottom: "20px",
    paddingTop: "30px",
  },
  boxview: {
    width: "310px",
    height: "170px",
    display: "flex",
    borderRadius: "10px",
    marginRight: "20px",
    backgroundColor: "white",
    margin: "20px",
    boxShadow: " 0 0 7.5px 0px grey",
  },
  imgboxview: {
    width: "40%",
    height: "100%",
    borderRadiusTopLeft: "",
  },
  contentboxview: {
    width: " 65%",
    height: "100%",
  },
  title: {
    width: "100%",
    height: "45.0px",
    fontFamily: "Londrina Solid",
    fontSize: "27.5px",
    paddingLeft: "5px",
    lineHeight: "42.5px",
    color: "black",
  },
  tagline: {
    width: "100%",
    height: "30.0px",
    fontFamily: "Poiret One",
    fontSize: "15px",
    fontWeight: "900",
    paddingTop: "10px",
    paddingLeft: "10px",
    color: "grey",
  },
  priceboxview: {
    height: "40px",
    width: "100%",
    display: "flex",
  },
  priceview: {
    height: "40px",
    width: "50%",
    paddingLeft: "20px",
    lineHeight: "40px",
    textDecoration: "line-through",
    color: "red",
  },
  discountview: {
    height: "40px",
    width: "50%",
    color: "green",
    textAlign: "center",
    lineHeight: "40px",
  },
  add: {
    width: "50%",
    height: "40px",

    alignItems: "right",
    paddingRight: "20px",
  },
  actualpriceview: {
    width: "50%",
    height: "40px",
    paddingLeft: "20px",
    lineHeight: "30px",
    color: "black",
  },
  viewbox: {
    marginTop: "30px",
    // border: "2px solid red",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    margin: "10px",
    paddingTop: "10px",
    backgroundColor: "rgb(248,246,243)",
  },
  titleview: {
    width: "100%",
    height: "45.0px",
    fontFamily: "Londrina Solid",
    fontSize: "27.5px",
    paddingLeft: "5px",
    lineHeight: "42.5px",
    color: "black",
  },
});

const ProductDetail = () => {
  const params = useParams();
  const state = useContext(GlobalState);
  const [products] = state.productsAPI.products;

  const classes = useStyle();
  const addCart = state.userAPI.addCart;
  const [detailProduct, setDetailProduct] = useState([]);

  useEffect(() => {
    if (params.id) {
      products.forEach((product) => {
        if (product._id === params.id) setDetailProduct(product);
      });
    }
  }, [params.id, products]);

  if (detailProduct.length === 0) return null;
  return (
    <>
      <Navbar />
      <Box className={classes.box}>
        <div className={classes.imgbox}>
          <img src={detailProduct.url} className={classes.image} alt="" />
        </div>
        <div className={classes.contentbox}>
          <div className={classes.titlebox}>{detailProduct.longtitle}</div>
          <div className={classes.descriptionbox}>
            {detailProduct.description}
          </div>
          <div className={classes.pricebox}>
            <div className={classes.price}>₹ {detailProduct.cost}</div>
            <div className={classes.actualprice}>₹ {detailProduct.mrp}</div>
          </div>
          <div className={classes.cartbox}>
            <div className={classes.cart}>
              <Button
                variant="contained"
                className={classes.button}
                onClick={() => addCart(detailProduct)}
              >
                Add To Cart
              </Button>
            </div>
          </div>
        </div>
      </Box>
      <div>
        <h2 className={classes.deal}>RELATED PRODUCTS</h2>
        <Box className={classes.viewbox}>
          {products.map((product) => (
            <Box className={classes.boxview}>
              <div className={classes.imgboxview}>
                <img src={product.url} className={classes.imageview} alt="" />
              </div>
              <div className={classes.contentboxview}>
                <div className={classes.titleview}>{product.title}</div>
                <div className={classes.taglineview}>{product.tagline}</div>
                <div className={classes.priceboxview}>
                  <div className={classes.priceview}>₹{product.mrp}</div>
                  <div className={classes.discountview}>
                    {product.discount} OFF
                  </div>
                </div>
                <div className={classes.priceboxview}>
                  <div className={classes.actualpriceview}>₹{product.cost}</div>
                  <div className={classes.addview}>
                    <Link
                      to={`/detail/${product._id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <Button
                        variant="contained"
                        className={classes.cartbuttonview}
                      >
                        View
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Box>
          ))}
        </Box>
      </div>
    </>
  );
};

export default ProductDetail;
