import React, { useState, useEffect } from "react";
import "./styles/TasksChart.scss";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import "./styles/TasksChart-Media.scss";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getChartTask } from "../../redux/actions/actions";
import ChartTask from "./ChartTask";

const TasksChart = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://herokuhosting2.herokuapp.com/getTaskChart")
      .then((res) => dispatch(getChartTask(res.data.TaskChart.thisWeek)))
      .catch((err) => console.log(err));
  }, [dispatch]);

  const [age, setAge] = useState(0);
  const handleChange = (event) => {
    setAge(event.target.value);
    if (event.target.value === 0) {
      axios
        .get("https://herokuhosting2.herokuapp.com/getTaskChart")
        .then((res) => dispatch(getChartTask(res.data.TaskChart.thisWeek)))
        .catch((err) => console.log(err));
    }else if(event.target.value === 1 ){
      axios
      .get("https://herokuhosting2.herokuapp.com/getTaskChart")
      .then((res) => dispatch(getChartTask(res.data.TaskChart.thisMonth)))
      .catch((err) => console.log(err));
    }else{
      axios
      .get("https://herokuhosting2.herokuapp.com/getTaskChart")
      .then((res) => dispatch(getChartTask(res.data.TaskChart.thisYear)))
      .catch((err) => console.log(err));
    }
  };
  return (
    <div className="tasks-chart">
      <div className="donut-chart-tasks">
        <p>Tasks</p>
        <div className="show-chart">
          <span className="show">Show:</span>
          <FormControl style={{ paddingLeft: "3px" }}>
            <Select
              value={age}
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
      <ChartTask /> 
    </div>
  );
};

export default TasksChart;
