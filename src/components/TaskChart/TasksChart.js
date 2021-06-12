import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import "./styles/TasksChart.scss";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import "./styles/TasksChart-Media.scss";
import TaskChartSetUp from "./TaskChartSetUp";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const TasksChart = () => {
  const [options] = useState(TaskChartSetUp());
  const classe = useStyles();
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className="tasks-chart">
      <div className="donut-chart-tasks">
        <p>Tasks</p>
        <div className="show-chart">
          <span className="show">Show:</span>
          <FormControl
            className={classe.formControl}
            style={{ paddingLeft: "3px" }}
          >
            <Select
              value={age}
              onChange={handleChange}
              displayEmpty
              className={classe.selectEmpty}
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">
                <span>This week</span>
              </MenuItem>
              <MenuItem value={10}>
                <span> This month</span>
              </MenuItem>
              <MenuItem value={20}>
                <span>This year</span>
              </MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <ReactApexChart
        options={options}
        series={options.series}
        type="donut"
        style={{ width: "90%", height: "224px", marginLeft: "-25px" }}
        className="donut"
      />
    </div>
  );
};

export default TasksChart;
