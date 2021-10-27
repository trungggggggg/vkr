import { makeStyles } from "@mui/styles";
import React from "react";

const CcBlock = (props) => {
  const { blockid } = props;
  const classes = useStyles();
  return (
    <div id={blockid} className={`${classes.block}`}>
      {`Capture/Compare TA${blockid}`}
      <div id={`taccr${blockid}`} className={classes.taccr}>
        {`TACCR${blockid}`}
      </div>
    </div>
  );
};
const useStyles = makeStyles({
  block: {
    padding: "20px",
    borderRadius: "5px",
    border: "2px solid",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
  },
  taccr: {
    padding: "0px 16px",
    border: "2px solid",
  },
});
export default CcBlock;
