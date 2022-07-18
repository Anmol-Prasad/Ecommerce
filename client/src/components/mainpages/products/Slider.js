import { useContext } from "react";
import { GlobalState } from "../../../GlobalState";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { makeStyles, Typography } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyle = makeStyles({
  image: {
    height: "170px",
    width: "100px",
    borderTopLeftRadius: "10px",
    borderBottomLeftRadius: "10px",
  },
  component: {
    backgroundColor: "rgb(248,246,243)",
    padding: "10px",
    margin: "10px",
    paddingBottom: "60px",
    marginBottom: "10px",
  },
  cartbutton: {
    borderRadius: "10px",
    border: "1.25px solid black",
    color: "black",
    padding: "1px",
    marginLeft: "15.0px",
    backgroundColor: "white",
  },
  // textbox: {
  //   display: "flex",
  //   paddingBottom: "10px",
  //   paddingTop: "20px",
  //   lineHeight: "20px",
  // },
  // button: {
  //   marginLeft: "auto",
  //   backgroundColor: "#333",
  //   color: "white",
  //   height: "40px",
  // },
  // deal: {
  //   fontSize: "25px",
  //   fontWeight: "600",
  //   paddingLeft: "10px",
  //   textAlign: "center",
  //   fontFamily: "Alfa Slab One",
  //   marginBottom: "20px",
  // },
  box: {
    width: "310px",
    height: "170px",
    display: "flex",
    borderRadius: "10px",
    marginRight: "20px",
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
    fontSize: "27.5px",
    paddingLeft: "5px",
    lineHeight: "42.5px",
    color: "black",
    fontWeight: "bolder",
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
    color: "red",
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
    color: "black",
  },
  deal: {
    fontSize: "35px",
    // fontWeight: "600",
    paddingLeft: "10px",
    textAlign: "center",
    fontFamily: "Alfa Slab One",
    marginBottom: "20px",
    margin: "auto",
    // border: "2px solid red",
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
});
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
function Slider() {
  const state = useContext(GlobalState);
  const [products] = state.productsAPI.products;
  const [isAdmin] = state.userAPI.isAdmin;
  const classes = useStyle();
  console.log(products);
  return (
    <Box className={classes.component}>
      <Box className={classes.textbox}>
        <Link
          to={{ pathname: "/viewall" }}
          style={{ marginLeft: "10px", textDecoration: "none" }}
        >
          <Button variant="contained" className={classes.button}>
            View All
          </Button>
        </Link>
        <Typography className={classes.deal}>Best Deals </Typography>
      </Box>
      <Carousel
        responsive={responsive}
        infinite={true}
        draggable={true}
        swipeable={true}
        centerMode={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        isAdmin={isAdmin}
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
}
export default Slider;
