import MoreVertIcon from "@mui/icons-material/MoreVert";
import TableRowsOutlinedIcon from "@mui/icons-material/TableRowsOutlined";
import { IconButton, Tooltip } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import ConfigPanel from "./ConfigPanel";
import RegisterTACTL from "./RegisterTACTL";

const CounterTAR = () => {
  const classes = useStyles();
  const [anchorElConfig, setAnchorElConfig] = React.useState(null);
  const [anchorElReg, setAnchorElReg] = React.useState(null);

  const handleClickConfig = (event) => {
    setAnchorElConfig(event.currentTarget);
  };
  const handleClickReg = (event) => {
    setAnchorElReg(event.currentTarget);
  };

  return (
    <div id="countertar" className={`${classes.block}`}>
      <div className={classes.topbar}>
        <span className={classes.countername}>16-bit Timer</span>
        <div>
          <Tooltip title=" Timer-A Control Register">
            <IconButton onClick={handleClickReg} size="small">
              <TableRowsOutlinedIcon className={classes.button} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Config">
            <IconButton onClick={handleClickConfig} size="small">
              <MoreVertIcon className={classes.button} />
            </IconButton>
          </Tooltip>
        </div>
      </div>
      <div id="tar" className={classes.tar}>
        TAR
      </div>
      <ConfigPanel
        anchorElConfig={anchorElConfig}
        setAnchorElConfig={setAnchorElConfig}
      />
      <RegisterTACTL
        anchorElReg={anchorElReg}
        setAnchorElReg={setAnchorElReg}
      />
    </div>
  );
};
const useStyles = makeStyles({
  block: {
    padding: "10px",
    borderRadius: "5px",
    border: "2px solid",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
  },
  countername: {},
  topbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "10px",
  },
  tar: {
    padding: "0px 16px",
    border: "2px solid",
  },
  button: {
    color: "#222",
  },
});
export default CounterTAR;
