import { makeStyles } from "@mui/styles";
import TimerA from "components/TimerA/TimerA";
import React from "react";

function App() {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <TimerA />
    </div>
  );
}
const useStyles = makeStyles({
  app: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
});

export default App;
