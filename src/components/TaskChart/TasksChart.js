import React, { useState, useEffect } from "react";
import "./styles/TasksChart.scss";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import "./styles/TasksChart-Media.scss";
import axios from "axios";
import ChartTask from "./ChartTask";

const TasksChart = () => {
  const [age, setAge] = useState(0);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://dashboard-database-af1ec-default-rtdb.firebaseio.com/TaskChart/" +
          0 +
          ".json"
      )
      .then((res) => setTasks(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (event) => {
    setAge(event.target.value);
    axios
      .get(
        "https://dashboard-database-af1ec-default-rtdb.firebaseio.com/TaskChart/" +
          event.target.value +
          ".json"
      )
      .then((res) => setTasks(res.data))
      .catch((err) => console.log(err));
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
      <ChartTask tasks={tasks} />
    </div>
  );
};

export default TasksChart;
