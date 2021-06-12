import React, { useState } from "react";
import "./styles/DealsGraphic.scss";
import ReactApexChart from "react-apexcharts";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import "./styles/DealsGraphic-Media.scss";
import DealsGraphicSetUp from "./DealsGraphicSetUp";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
const DealsGraphic = () => {
  const [options] = useState(DealsGraphicSetUp());
  const classes = useStyles();
  const [option, setOption] = useState("");

  const handleChange = (event) => {
    setOption(event.target.value);
  };
  return (
    <div className="deals-graphic">
      <div className="area-chart-tasks">
        <p>Deals</p>
        <div className="show-chart">
          <span className="show">Show:</span>
          <FormControl
            className={classes.formControl}
            style={{ paddingLeft: "3px" }}
          >
            <Select
              value={option}
              onChange={handleChange}
              displayEmpty
              className={classes.selectEmpty}
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">
                <span>This week</span>
              </MenuItem>
              <MenuItem value={1}>
                <span> This month</span>
              </MenuItem>
              <MenuItem value={2}>
                <span>This year</span>
              </MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <ReactApexChart
        options={options.options}
        series={options.series}
        type="area"
        style={{ width: "100%", height: "222px" }}
      />
    </div>
  );
};

export default DealsGraphic;
