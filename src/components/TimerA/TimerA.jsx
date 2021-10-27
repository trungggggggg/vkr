import { makeStyles } from "@mui/styles";
import CcBlock from "components/TimerA/cc-block/CcBlock";
import ConnectLines from "components/TimerA/ConnectLines";
import CounterTAR from "components/TimerA/counter-tar/CounterTAR";
import React from "react";
import { ccblock } from "constants/ccblock";
import { clockSignal } from "constants/clksignal";
import Multiplexer from "components/TimerA/Multiplexer";
import Signal from "components/TimerA/Signal";

const TimerA = () => {
  const classes = useStyles();

  return (
    <div className={classes.timerA}>
      Timer A
      <div className={classes.signal_and_counter}>
        <div className={classes.clk}>
          {clockSignal.map((item) => (
            <Signal key={item} name={item} />
          ))}
        </div>
        <Multiplexer />
        <CounterTAR />
        <ConnectLines />
      </div>
      {ccblock.map((item) => (
        <CcBlock key={item} blockid={item} />
      ))}
    </div>
  );
};
const useStyles = makeStyles({
  timerA: {
    border: "2px solid black",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
  },
  signal_and_counter: {
    display: "flex",
    alignItems: "center",
    gap: "100px",
  },
  clk: {
    display: "flex",
    flexDirection: "column",
    height: "48px",
    justifyContent: "center",
    alignItems: "flex-end",
  },
});
export default TimerA;
