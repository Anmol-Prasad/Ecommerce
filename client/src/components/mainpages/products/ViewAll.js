import { useContext } from "react";
import { GlobalState } from "../../../GlobalState";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button } from "@material-ui/core";
import Navbar from "../../navbar/Navbar";
import { Link } from "react-router-dom";

const useStyle = makeStyles({
  image: {
    height: "170px",
    width: "100px",
    borderTopLeftRadius: "10px",
    borderBottomLeftRadius: "10px",
  },
  imageadmin: {
    height: "150px",
    width: "100px",
    borderTopLeftRadius: "10px",
    borderBottomLeftRadius: "10px",
  },
  component: {
    backgroundColor: "rgb(248,246,243)",
    padding: "10px",
    margin: "10px",
  },
  delete: {
    backgroundColor: "#FF7F7F",
    padding: "2px",
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
  button: {
    marginLeft: "auto",
    backgroundColor: "#333",
    color: "white",
    height: "40px",
  },
  // deal: {
  //   fontSize: "35px",
  //   paddingLeft: "10px",
  //   textAlign: "center",
  //   fontFamily: "Alfa Slab One",
  //   marginBottom: "20px",
  //   margin: "auto",
  // },
  box: {
    width: "310px",
    height: "170px",
    display: "flex",
    borderRadius: "10px",
    marginRight: "20px",
    backgroundColor: "white",
    margin: "20px",
    boxShadow: " 0 0 25px 0px grey",
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
    width: "80%",
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
  viewbox: {
    marginTop: "100px",
    // border: "2px solid red",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    margin: "10px",
    paddingTop: "10px",
  },
  deal: {
    fontSize: "35px",
    paddingLeft: "10px",
    textAlign: "center",
    fontFamily: "Alfa Slab One",
    marginBottom: "20px",
    margin: "auto",
    // border: "2px solid red",
  },
  admin: {
    display: "flex",
  },
});

const ViewAll = () => {
  const state = useContext(GlobalState);
  const [products] = state.productsAPI.products;
  const classes = useStyle();
  const [isAdmin] = state.userAPI.isAdmin;
  // const params = useParams();
  return (
    <>
      <Navbar />
      <Box className={classes.viewbox}>
        {products.map((product) => (
          <Box className={classes.box}>
            <div className={classes.imgbox}>
              <img src={product.url} className={classes.image} alt="" />
            </div>
            <div className={classes.contentbox}>
              <div className={classes.admin}>
                <div className={classes.title}>{product.title}</div>
                {isAdmin && (
                  <input
                    type="checkbox"
                    checked={product.checked}
                    style={{ marginTop: "12.50px" }}
                  />
                )}
              </div>
              <div className={classes.tagline}>{product.tagline}</div>
              <div className={classes.pricebox}>
                <div className={classes.price}>₹{product.mrp}</div>
                {isAdmin ? (
                  ""
                ) : (
                  <div className={classes.discount}>{product.discount} OFF</div>
                )}
              </div>
              <div className={classes.pricebox}>
                <div className={classes.actualprice}>₹{product.cost}</div>
                <div className={classes.add}>
                  <Link
                    to={`/detail/${product._id}`}
                    style={{ textDecoration: "none" }}
                  >
                    {isAdmin ? (
                      <Button variant="contained" className={classes.delete}>
                        Delete
                      </Button>
                    ) : (
                      <Button
                        variant="contained"
                        className={classes.cartbutton}
                      >
                        View
                      </Button>
                    )}
                  </Link>
                </div>
              </div>
            </div>
          </Box>
        ))}
      </Box>
    </>
  );
};
export default ViewAll;
