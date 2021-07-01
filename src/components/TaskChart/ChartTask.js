import React from "react";
import ReactApexChart from "react-apexcharts";

const ChartTask = (props) => {
  const options = {
    series: props.tasks,
    labels: ["Active", "Completed", "Ended"],

    plotOptions: {
      pie: {
        donut: {
          width: 350,
          size: 92,
          labels: {
            show: true,
            name: {
              show: false,
            },
            value: {
              show: true,
              color: "#2ED47A",
              fontSize: "56px",
              fontFamily: "Poppins-Medium",
              offsetY: +20,
              formatter: function (val) {
                return val + "%";
              },
            },
            total: {
              show: true,
              color: "blue",
              formatter: (val) => {
                return Math.max(...val.config.series) + "%";
              },
            },
          },
        },
      },
    },

    stroke: {
      colors: ["#FFB946", "#2ED47A", "#F7685B"],
      width: 1,
      lineCap: "round",
    },
    chart: {
      type: "donut",
    },
    colors: ["orange", "green", "red"],

    fill: {
      colors: ["#FFB946", "#2ED47A", "#F7685B"],
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      position: "right",
      offsetY: 40,
      fontFamily: "sans-serif",
    },
    responsive: [
      {
        breakpoint: 900,
        options: {
          legend: {
            offsetY: 20,
          },
          plotOptions: {
            pie: {
              donut: {
                labels: {
                  value: {
                    fontSize: "40px",
                    offsetY: +10,
                  },
                },
              },
            },
          },
        },
      },
    ],
  };
  return (
    <ReactApexChart
      options={options}
      series={options.series}
      type="donut"
      style={{ width: "90%", height: "224px", marginLeft: "-25px" }}
      className="donut"
    />
  );
};

export default ChartTask;
