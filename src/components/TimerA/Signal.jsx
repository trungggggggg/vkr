import { makeStyles } from "@mui/styles";

import React from "react";

const Signal = (props) => {
  const classes = useStyles();
  const { name } = props;
  return (
    <div className={classes.signal} id={name}>
      {name}
    </div>
  );
};
const useStyles = makeStyles({
  signal: {
    height: "24px",
    paddingRight: "10px",
    textTransform: "uppercase",
  },
});
export default Signal;
