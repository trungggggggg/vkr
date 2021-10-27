import React from "react";
import { makeStyles } from "@mui/styles";

const Multiplexer = () => {
  const classes = useStyles();

  return (
    <div id="multiplexer" className={classes.multiplexer}>
      <div className={classes.muxinline} />
    </div>
  );
};
const useStyles = makeStyles({
  multiplexer: {
    height: "120px",
    width: "40px",
    backgroundColor: "#000",
    clipPath: "polygon(0 0, 100% 25%, 100% 75%, 0% 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
  muxinline: {
    height: "112px",
    width: "36px",
    backgroundColor: "#fff",
    clipPath: "polygon(0 0, 100% 24%, 100% 76%, 0% 100%)",
  },
});
export default Multiplexer;
