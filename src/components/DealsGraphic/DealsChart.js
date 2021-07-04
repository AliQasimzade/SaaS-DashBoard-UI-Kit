import React from "react";
import ReactApexChart from "react-apexcharts";

const DealsChart = (props) => {
  
const options = {
  series: [
    {
      name: "Closed deals",
      data: props.chart.data,
    },
    {
      name: " ",
      data: [0],
    },
  ],
  options: {
    grid: {
      show: true,
      borderColor: "#D7DBDE",
      strokeWidth: 1,
      strokeDashArray: 6,
    },
    markers: {
      colors: "#fff",
      strokeColors: "#109CF1",
      strokeWidth: 2,
      strokeOpacity: 0.9,
      hover: {
        size: undefined,
        sizeOffset: 4,
      },
    },
    stroke: {
      curve: "smooth",
      width: 2,
      lineCap: "round",
      show: true,
      dashArray: 0,
    },
    tooltip: {
      enabled: true,
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: (seriesName) => seriesName.data,
        },
      },
    },

    chart: {
      stacked: true,
      zoom: {
        enabled: false,
      },
      toolbar: {
        tools: {
          download: false,
        },
      },
    },
    dataLabels: {
      enabled: false,
    },

    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.45,
        opacityTo: 0.05,
        stops: [20, 100, 100, 100],
      },
    },
    xaxis: {
      type: "category",
      categories: props.chart.date,
      crosshairs: {
        show: true,
        width: 1,
        stroke: {
          width: 1,
          dashArray: 0,
        },
      },
      tooltip: {
        enabled: false,
      },
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        style: {
          color: "#4C5862",
          fontSize: 12,
          fontFamily: "Poppins-Regular",
        },
      },
    },
    yaxis: {
      tickAmount: 4,
      labels: {
        style: {
          colors: "#4C5862",
          fontSize: 12,
          fontFamily: "Poppins-Regular",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },

    legend: {
      show: true,
      position: "top",
      horizontalAlign: "left",
      offsetX: -20,
      fontSize: 10,
      fontFamily: "Poppins-Regular",
      labels: {
        colors: "#192A3E",
      },
      markers: {
        width: [11, 0],
        height: [11, 0],
        strokeColor: "#109CF1",
        strokeWidth: [0.5, 0],
        fillColors: ["#fff", "#fff"],
      },
    },
  },
}
  return (
    <ReactApexChart
      options={options.options}
      series={options.series}
      type="area"
      style={{ width: "100%", height: "222px" }}
    />
  );
};

export default DealsChart;
