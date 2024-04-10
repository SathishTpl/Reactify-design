import React, { Component } from 'react';
import { PolarArea } from 'react-chartjs-2';
import ChartConfig from 'Constants/chart-config';

const data = {
	datasets: [{
		data: [
			11,
			16,
			7,
			3
		],
		backgroundColor: [
			ChartConfig.color.primary,
			ChartConfig.color.warning,
			ChartConfig.color.default,
			ChartConfig.color.info
		],
		label: 'My dataset'
	}],
	labels: [
		'Series A',
		'Series B',
		'Series C',
		'Series D'
	]
};

const options = {
	legend: {
		labels: {
			fontColor: ChartConfig.legendFontColor
		}
	},
	responsive: true,
   maintainAspectRatio:false
};

export default class PolarChart extends Component {
	render() {
		return (
			<PolarArea data={data} options={options} height={228}/>
		);
	}
}
