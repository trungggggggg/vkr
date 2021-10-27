import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Popover,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import { changeBitArray } from "../tactlSlice";

const ConfigPanel = (props) => {
  const { anchorElConfig, setAnchorElConfig } = props;

  // @ts-ignore
  const tactlValue = useSelector((state) => state.tactl.value);
  const dispatch = useDispatch();

  const classes = useStyles();

  const handleDividerChange = (event) => {
    dispatch(
      changeBitArray({ start: 6, bitArray: event.target.value.split("") })
    );
  };
  const handleModeChange = (event) => {
    dispatch(
      changeBitArray({ start: 4, bitArray: event.target.value.split("") })
    );
  };
  const handleIntrChange = (event) => {
    dispatch(
      changeBitArray({ start: 1, bitArray: event.target.value.split("") })
    );
  };
  const handleClose = () => {
    setAnchorElConfig(null);
  };
  const open = Boolean(anchorElConfig);
  const id = open ? "simple-popover" : undefined;
  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorElConfig}
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
        <FormControl component="fieldset">
          <FormLabel component="legend">Divider</FormLabel>
          <RadioGroup
            row
            aria-label="divider"
            name="controlled-radio-buttons-group"
            value={tactlValue.slice(6, 8).join("")}
            onChange={handleDividerChange}
          >
            <FormControlLabel value={"00"} control={<Radio />} label="1" />
            <FormControlLabel value={"10"} control={<Radio />} label="2" />
            <FormControlLabel value={"01"} control={<Radio />} label="4" />
            <FormControlLabel value={"11"} control={<Radio />} label="8" />
          </RadioGroup>
          <FormLabel component="legend">Mode</FormLabel>
          <RadioGroup
            aria-label="mode"
            name="controlled-radio-buttons-group"
            value={tactlValue.slice(4, 6).join("")}
            onChange={handleModeChange}
          >
            <FormControlLabel
              value={"00"}
              control={<Radio />}
              label="Stop mode"
            />
            <FormControlLabel
              value={"10"}
              control={<Radio />}
              label="Up mode"
            />
            <FormControlLabel
              value={"01"}
              control={<Radio />}
              label="Continuous mode"
            />
            <FormControlLabel
              value={"11"}
              control={<Radio />}
              label="Up/down mode"
            />
          </RadioGroup>
          <FormLabel component="legend">Interupt</FormLabel>
          <RadioGroup
            row
            aria-label="interupt"
            name="controlled-radio-buttons-group"
            value={tactlValue.slice(1, 2).join("")}
            onChange={handleIntrChange}
          >
            <FormControlLabel value={"1"} control={<Radio />} label="Enable" />
            <FormControlLabel value={"0"} control={<Radio />} label="Disable" />
          </RadioGroup>
        </FormControl>
      </div>
    </Popover>
  );
};
const useStyles = makeStyles({
  popover: { padding: "10px", display: "flex", flexDirection: "column" },
});
export default ConfigPanel;
