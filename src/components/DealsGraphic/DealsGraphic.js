import React, { useState, useEffect } from "react";
import "./styles/DealsGraphic.scss";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import "./styles/DealsGraphic-Media.scss";
import axios from "axios";
import DealsChart from "./DealsChart";

const DealsGraphic = () => {
  const [option, setOption] = useState(0);
  const [chart, setChart] = useState();

  useEffect(() => {
    axios
      .get(
        "https://dashboard-database-af1ec-default-rtdb.firebaseio.com/DealsChart/" +
          0 +
          ".json"
      )
      .then((res) => setChart(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (event) => {
    setOption(event.target.value);
    axios
      .get(
        "https://dashboard-database-af1ec-default-rtdb.firebaseio.com/DealsChart/" +
          event.target.value +
          ".json"
      )
      .then((res) => setChart(res.data))
      .catch((err) => console.log(err));

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
      {chart? <DealsChart chart={chart} />:""}
    </div>
  );
};

export default DealsGraphic;
