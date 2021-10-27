import { Popover } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { invert } from "../tactlSlice";

const RegisterTACTL = (props) => {
  const { anchorElReg, setAnchorElReg } = props;
  const classes = useStyles();
  // @ts-ignore
  const tactlValue = useSelector((state) => state.tactl.value);
  const dispatch = useDispatch();
  const handleClose = () => {
    setAnchorElReg(null);
  };
  const open = Boolean(anchorElReg);
  const id = open ? "simple-popover" : undefined;

  const changeValue = (key) => {
    dispatch(invert(key));
  };
  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorElReg}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <div className={classes.popover}>
        <table className={classes.table} aria-label="tacctl register">
          <tr className={classes.tr}>
            <td colSpan={6}>
              <div className={classes.bitnumber}>
                <span>15</span>
                <span>10</span>
              </div>
            </td>
            <td colSpan={2}>
              <div className={classes.bitnumber}>
                <span>9</span>
                <span>8</span>
              </div>
            </td>
            <td colSpan={2}>
              <div className={classes.bitnumber}>
                <span>7</span>
                <span>6</span>
              </div>
            </td>
            <td colSpan={2}>
              <div className={classes.bitnumber}>
                <span>5</span>
                <span>4</span>
              </div>
            </td>
            <td colSpan={1}>
              <div className={classes.bitnumber}>
                <span></span>
                <span>3</span>
              </div>
            </td>
            <td colSpan={1}>
              <div className={classes.bitnumber}>
                <span></span>
                <span>2</span>
              </div>
            </td>
            <td colSpan={1}>
              <div className={classes.bitnumber}>
                <span></span>
                <span>1</span>
              </div>
            </td>
            <td colSpan={1}>
              <div className={classes.bitnumber}>
                <span></span>
                <span>0</span>
              </div>
            </td>
          </tr>
          <tr>
            {[...tactlValue].reverse().map((item, index) => (
              <td
                key={index}
                className={classes.value}
                onClick={() => changeValue(15 - index)}
              >
                <span>{item}</span>
              </td>
            ))}
          </tr>
          <tr>
            <td className={classes.bitinfo} colSpan={6}>
              <div></div>
            </td>
            <td className={classes.bitinfo} colSpan={2}>
              <div>TASSELx</div>
            </td>
            <td className={classes.bitinfo} colSpan={2}>
              <div>IDx</div>
            </td>
            <td className={classes.bitinfo} colSpan={2}>
              <div>MCx</div>
            </td>
            <td className={classes.bitinfo} colSpan={1}>
              <div></div>
            </td>
            <td className={classes.bitinfo} colSpan={1}>
              <div>TACLR</div>
            </td>
            <td className={classes.bitinfo} colSpan={1}>
              <div>TAIE</div>
            </td>
            <td className={classes.bitinfo} colSpan={1}>
              <div>TAIFG</div>
            </td>
          </tr>
        </table>
      </div>
    </Popover>
  );
};
const useStyles = makeStyles({
  popover: {
    padding: "10px",
    display: "flex",
    flexDirection: "column",
  },
  table: {
    borderCollapse: "collapse",
  },
  tr: {},
  bitnumber: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0 4px",
    fontSize: "70%",
  },
  value: {
    border: "1px solid",
    textAlign: "center",
    padding: "6px 12px",
    cursor: "pointer",
    userSelect: "none",
  },
  bitinfo: {
    fontSize: "70%",
    border: "1px solid",
    textAlign: "center",
  },
});
export default RegisterTACTL;
