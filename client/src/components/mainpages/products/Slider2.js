import Carousel from "react-material-ui-carousel";
import "react-multi-carousel/lib/styles.css";
// import { useSelector } from "react-redux";
import { makeStyles, Typography } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { getProducts as listProducts } from "../../Redux/Actions/ProductActions";;
import { Link } from "react-router-dom";
import { GlobalState } from "../../../GlobalState";
import { useContext } from "react";

const useStyle = makeStyles({
  image: {
    height: "170px",
    width: "110px",
    borderTopLeftRadius: "10px",
    borderBottomLeftRadius: "10px",
    // padding: "5px",
  },
  component: {
    backgroundColor: "rgb(248,246,243)",
    padding: "10px",
    // margin: "10px",
  },
  cartbutton: {
    borderRadius: "30px",
    border: "2px solid #f05",
    color: "#f05",
    padding: "1px",
    marginLeft: "20px",
    backgroundColor: "white",
  },
  textbox: {
    display: "flex",
    paddingBottom: "10px",
    paddingTop: "20px",
    lineHeight: "20px",
  },
  button: {
    marginLeft: "auto",
    backgroundColor: "#333",
    color: "white",
    height: "40px",
  },
  deal: {
    fontSize: "25px",
    fontWeight: "600",
    paddingLeft: "10px",
    textAlign: "center",
    fontFamily: "Alfa Slab One",
    marginBottom: "20px",
  },
  box: {
    width: "310px",
    height: "170px",
    display: "flex",
    borderRadius: "10px",
    margin: "auto",
    backgroundColor: "white",
  },
  imgbox: {
    width: "40%",
    height: "100%",
    borderRadiusTopLeft: "",
  },
  contentbox: {
    width: " 65%",
    height: "100%",
  },
  title: {
    width: "100%",
    height: "45.0px",
    fontFamily: "Londrina Solid",
    fontSize: "24px",
    paddingLeft: "5px",
    lineHeight: "42.5px",
  },
  tagline: {
    width: "100%",
    height: "30.0px",
    fontFamily: "Poiret One",
    fontSize: "15px",
    fontWeight: "900",
    paddingTop: "10px",
    paddingLeft: "10px",
  },
  pricebox: {
    height: "40px",
    width: "100%",
    display: "flex",
  },
  price: {
    height: "40px",
    width: "50%",
    paddingLeft: "20px",
    lineHeight: "40px",
    textDecoration: "line-through",
  },
  discount: {
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
  actualprice: {
    width: "50%",
    height: "40px",
    paddingLeft: "20px",
    lineHeight: "30px",
  },
});

const Slider2 = () => {
  const state = useContext(GlobalState);
  const [products] = state.productsAPI.products;
  // const [isAdmin] = state.userAPI.isAdmin;
  const classes = useStyle();
  // const { products } = useSelector((state) => state.getProducts);
  // const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(listProducts());
  });

  return (
    <Box className={classes.component}>
      <Box className={classes.textbox}>
        <Typography className={classes.deal}>Best Deals </Typography>
        <Link
          to={{ pathname: "/viewall" }}
          style={{ marginLeft: "10px", textDecoration: "none" }}
        >
          <Button variant="contained" className={classes.button}>
            View All
          </Button>
        </Link>
      </Box>
      <Carousel
        infinite={true}
        draggable={true}
        navButtonsAlwaysVisible={true}
        centerMode={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        // products={products}
      >
        {products.map((product) => (
          <Box className={classes.box}>
            <div className={classes.imgbox}>
              <img src={product.url} className={classes.image} alt="" />
            </div>
            <div className={classes.contentbox}>
              <div className={classes.title}>{product.title}</div>
              <div className={classes.tagline}>{product.tagline}</div>
              <div className={classes.pricebox}>
                <div className={classes.price}>₹{product.mrp}</div>
                <div className={classes.discount}>{product.discount} OFF</div>
              </div>
              <div className={classes.pricebox}>
                <div className={classes.actualprice}>₹{product.cost}</div>
                <div className={classes.add}>
                  <Link
                    to={`/detail/${product._id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Button variant="contained" className={classes.cartbutton}>
                      View
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default Slider2;
