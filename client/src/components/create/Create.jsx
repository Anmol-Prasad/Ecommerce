import axios from "axios";
import { Box, TextField } from "@material-ui/core";
import { useState } from "react";
import { makeStyles } from "@mui/styles";
import Navbar from "../navbar/Navbar";

const useStyle = makeStyles((theme) => ({
  bigbox: {
    border: "0.1px solid",
    width: "100%",
    height: "100vh",
  },
  box: {
    width: "350px",
    margin: "auto",
    borderRadius: "20px",
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    backdropFilter: "blur(100.5px)",
    // borderRadius: "15px",
    // border: "2px solid red",
    marginTop: "100px",
    boxShadow: "0 0 25px 0px black",
    // boxShadow: " 0 0 10px black",
    padding: "20px",
    marginBottom: "20px",
  },
  buttonboxstyle: {
    marginLeft: "12.5%",
    width: "270px",
    marginBottom: "20px",
    backgroundColor: "lightgreen",
    marginTop: "30px",
    padding: "8.5px",
    fontSize: "17.5px",
    fontFamily: "Exo",
    border: "2px solid white",
    borderRadius: "5px",
    fontWeight: "bold",
  },
  textboxstyle: {
    fontSize: "300px",
    border: "2px solid red",
    marginBottom: "15px",
    width: "350px",
  },
  imageupload: {
    marginLeft: "10%",
    width: "250px",
    marginBottom: "20px",
  },
  textbox: {
    height: "75.0px",
  },
  loginbox: {
    width: "111.5%",
    backgroundColor: "#333",
    borderTopLeftRadius: "20px",
    borderTopRightRadius: "20px",
    boxShadow: " 0 0 25px 0px grey",
    marginBottom: "15px",
    marginLeft: "-20px",
    marginTop: "-20px",
  },
  welcome: {
    width: "35%",
    fontFamily: "Exo",
    fontSize: "40px",
    color: "white",
    marginLeft: "25%",
    paddingTop: "10px",
  },
  styles: {
    border: "2px solid white",
    marginBottom: "5px",
  },
}));

const Create = () => {
  const classes = useStyle();
  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const registerProduct = async (e) => {
    alert("roduct");
    try {
      await axios.post("/api/products", {
        ...product,
      });
      e.preventDefault();
      alert("Product has been created successfully");
    } catch (err) {
      alert(err.response.data.msg);
    }
  };
  //   product_id,
  //         url,
  //         title,
  //         longtitle,
  //         tagline,
  //         mrp,
  //         discount,
  //         cost,
  //         description,
  const [product, setProduct] = useState({
    product_id: "",
    url: "",
    title: "",
    longtitle: "",
    tagline: "",
    mrp: "",
    discount: "",
    cost: "",
    description: "",
  });
  return (
    <>
      <Navbar />
      <div className={classes.bigbox}>
        <Box className={classes.box}>
          <div className={classes.loginbox}>
            <div className={classes.textbox}>
              <div className={classes.welcome}>REGISTER</div>
            </div>
          </div>
          <form onSubmit={registerProduct}>
            <div className={classes.styles}>
              <TextField
                type="text"
                name="product_id"
                required
                placeholder="Product_id"
                value={product.product_id}
                onChange={onChangeInput}
                className={classes.textboxstyle}
                autoComplete="off"
              />
            </div>
            <div className={classes.styles}>
              <TextField
                type="text"
                name="url"
                required
                placeholder="Enter Image Link"
                value={product.url}
                onChange={onChangeInput}
                className={classes.textboxstyle}
                autoComplete="off"
              />
            </div>
            <div>
              <TextField
                type="text"
                name="title"
                required
                placeholder="Enter Product Name (Short)"
                value={product.title}
                onChange={onChangeInput}
                className={classes.textboxstyle}
                autoComplete="off"
              />
            </div>
            <div className={classes.styles}>
              <TextField
                type="text"
                name="longtitle"
                required
                placeholder="Enter Product Name (Long)"
                value={product.longtitle}
                onChange={onChangeInput}
                className={classes.textboxstyle}
                autoComplete="off"
              />
            </div>
            <div className={classes.styles}>
              <TextField
                type="text"
                name="tagline"
                required
                placeholder="Enter Product Tagline"
                value={product.tagline}
                onChange={onChangeInput}
                className={classes.textboxstyle}
                autoComplete="off"
              />
            </div>
            <div className={classes.styles}>
              <TextField
                type="text"
                name="mrp"
                required
                placeholder="Enter Product MRP"
                value={product.mrp}
                onChange={onChangeInput}
                className={classes.textboxstyle}
                autoComplete="off"
              />
            </div>
            <div className={classes.styles}>
              <TextField
                type="text"
                name="discount"
                required
                placeholder="Enter Discount"
                value={product.discount}
                onChange={onChangeInput}
                className={classes.textboxstyle}
                autoComplete="off"
              />
            </div>
            <div className={classes.styles}>
              <TextField
                type="text"
                name="cost"
                required
                placeholder="Enter Product Selling Price"
                value={product.cost}
                onChange={onChangeInput}
                className={classes.textboxstyle}
                autoComplete="off"
              />
            </div>
            <div className={classes.styles}>
              <TextField
                type="text"
                name="description"
                required
                placeholder="Enter Product Description"
                value={product.description}
                onChange={onChangeInput}
                className={classes.textboxstyle}
                autoComplete="off"
              />
            </div>
            <button
              type="submit"
              variant="contained"
              className={classes.buttonboxstyle}
            >
              Submit
            </button>
          </form>
        </Box>
      </div>
    </>
  );
};

export default Create;
