import React, { useState } from "react";
import "../styles/DealsGraphic.scss";
import ReactApexChart from "react-apexcharts";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import "../styles/media-queries/DealsGraphic-Media.scss";

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
  const [options] = useState({
		series: [
			{
				name: 'Closed deals',
				data: [47, 100, 95, 170, 60, 160, 150],
			},
			{
				name: '',
				data: [0],
			},
		],
		options: {
			grid: {
				show: true,
				borderColor: '#D7DBDE',
				strokeWidth: 1,
				strokeDashArray: 6,
			},
			markers: {
				colors: '#fff',
				strokeColors: '#109CF1',
				strokeWidth: 2,
				strokeOpacity: 0.9,
				hover: {
					size: undefined,
					sizeOffset: 4,
				},
			},
			stroke: {
				curve: 'smooth',
				width: 2,
				lineCap: 'round',
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
				type: 'gradient',
				gradient: {
					shadeIntensity: 1,
					inverseColors: false,
					opacityFrom: 0.45,
					opacityTo: 0.05,
					stops: [20, 100, 100, 100],
				},
			},
			xaxis: {
				type: 'category',
				categories: ['1 Dec', '', '8 Dec', '', '16 Dec', '', '31 Dec'],
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
						color: '#4C5862',
						fontSize: 12,
						fontFamily: 'Poppins-Regular',
					},
				},
			},
			yaxis: {
				tickAmount: 4,
				min: 0,
				max: 200,
				labels: {
					style: {
						colors: '#4C5862',
						fontSize: 12,
						fontFamily: 'Poppins-Regular',
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
				position: 'top',
				horizontalAlign: 'left',
				offsetX: -20,
				fontSize: 10,
				fontFamily: 'Poppins-Regular',
				labels: {
					colors: '#192A3E',
				},
				markers: {
					width: [11, 0],
					height: [11, 0],
					strokeColor: '#109CF1',
					strokeWidth: [0.5, 0],
					fillColors: ['#fff', '#fff'],
				},
			},
		},
	});
  const classes = useStyles();
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
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
              value={age}
              onChange={handleChange}
              displayEmpty
              className={classes.selectEmpty}
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
        options={options.options}
        series={options.series}
        type="area"
        style={{ width: "100%", height: "222px", paddingLeft: "12px" }}
      />
    </div>
  );
};

export default DealsGraphic;