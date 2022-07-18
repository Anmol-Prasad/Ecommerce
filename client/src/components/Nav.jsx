import { ImageData } from "./banner/ImageData";
import { Box, Typography, makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  box: {
    "& img": {
      width: "140px",
      height: "130px",
      borderRadius: "50%",
    },
    // backgroundColor: "#333",
    justifyContent: "space-evenly",
    display: "flex",
    flexWrap: "wrap",
    marginTop: "80px",
    [theme.breakpoints.down("md")]: {
      marginTop: "120px",
    },
  },
  container: {
    textAlign: "center",
    padding: "12px 0px",
  },
  text: {
    fontSize: 17,
    fontWeight: 500,
    paddingTop: "10px",
    fontFamily: "Permanent Marker",
  },
}));

const Nav = () => {
  const classes = useStyle();
  return (
    <>
      <Box className={classes.box}>
        {ImageData.map((data) => (
          <Box className={classes.container}>
            <img src={data.url} alt="" />
            <Typography className={classes.text}> {data.text} </Typography>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Nav;
