import React, { useState } from "react";
import "./styles/DealsGraphic.scss";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import "./styles/DealsGraphic-Media.scss";
import axios from "axios";
import { useDispatch } from "react-redux";
import { changeChartData } from "../../redux/actions/actions";
import DealsChart from "./DealsChart";

const DealsGraphic = () => {
 
  const dispatch = useDispatch();
  const [option, setOption] = useState(0);

  const handleChange = (event) => {
    setOption(event.target.value);
    if (event.target.value === 0) {
      axios
        .get("https://herokuhosting2.herokuapp.com/getChart")
        .then((res) => dispatch(changeChartData(res.data.Chart)));
    } else if (event.target.value === 1) {
      axios
        .get("https://herokuhosting2.herokuapp.com/getChart")
        .then((res) => dispatch(changeChartData(res.data.Chart2)));
    } else if (event.target.value === 2) {
      axios
        .get("https://herokuhosting2.herokuapp.com/getChart")
        .then((res) => dispatch(changeChartData(res.data.Chart3)));
    }
  };
  return (
    <div className="deals-graphic">
      <div className="area-chart-tasks">
        <p>Deals</p>
        <div className="show-chart">
          <span className="show">Show:</span>
          <FormControl style={{ paddingLeft: "3px" }}>
            <Select
              value={option}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value={0}>
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
      <DealsChart />
    </div>
  );
};

export default DealsGraphic;
