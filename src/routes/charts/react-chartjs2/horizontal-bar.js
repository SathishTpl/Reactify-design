import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import ChartConfig from 'Constants/chart-config';

const data = {
	labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
	datasets: [
		{
			label: 'Series A',
			backgroundColor: ChartConfig.color.info,
			borderColor: ChartConfig.color.info,
			borderWidth: 1,
			hoverBackgroundColor: ChartConfig.color.info,
			hoverBorderColor: ChartConfig.color.info,
			data: [65, 59, 80, 81, 56, 55, 40]
		}
	]
};

const options = {
	indexAxis: 'y',
	plugins:{
		legend: {
			labels: {
				fontColor: ChartConfig.legendFontColor
			}
		}	
	},
	scales: {
		x: {
			grid: {
				color: ChartConfig.chartGridColor
			},
			ticks: {
				fontColor: ChartConfig.axesColor
			}
		},
		y: {
			grid: {
				color: ChartConfig.chartGridColor,
				display:false
			},
			ticks: {
				fontColor: ChartConfig.axesColor
			}
		}
	}
};

export default class HorizontalBarChart extends Component {

	render() {
		return (
			<Bar data={data} options={options} />
		);
	}
}
