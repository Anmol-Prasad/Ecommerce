import Carousel from "react-material-ui-carousel";
import { BannerData, BannerDataMob } from "./ImageData";
import { makeStyles } from "@material-ui/core";
import { Box } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  image: {
    width: "100%",
    height: "400px",
  },
  box: {
    paddingTop: "20px",
  },
  boxpc: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  boxmob: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "inline",
    },
  },
}));

const Banner = () => {
  const classes = useStyle();
  return (
    <>
      <Box className={classes.box}>
        <Box className={classes.boxpc}>
          <Carousel autoPlay={true} navButtonsAlwaysVisible={true}>
            {BannerData.map((data) => (
              <img src={data.url} alt="" className={classes.image} />
            ))}
          </Carousel>
        </Box>
        <Box className={classes.boxmob}>
          <Carousel autoPlay={true} navButtonsAlwaysVisible={true}>
            {BannerDataMob.map((data) => (
              <img src={data.url} alt="" className={classes.image} />
            ))}
          </Carousel>
        </Box>
      </Box>
    </>
  );
};
export default Banner;
