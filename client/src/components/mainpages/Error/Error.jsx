import { makeStyles } from "@material-ui/core";
import NotFound from "../Images/notfound.svg";
// import { Link } from "react-router-dom";

const useStyle = makeStyles((theme) => ({}));
const Error = () => {
  const classes = useStyle();
  return (
    <div className={classes.svgimg}>
      <img src={NotFound} alt="" className={classes.svg}></img>
    </div>
  );
};
export default Error;
