/**
 * Stacked Area Chart
 */
import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import ChartConfig from 'Constants/chart-config';

const options = {
  plugins:{
    legend: {
      display: false,
      labels: {
        fontColor: ChartConfig.legendFontColor,
        usePointStyle: true
      }
    }  
  },
  scales: {
    x: {
      grid: {
        color: ChartConfig.chartGridColor,
        display: false
      },
      ticks: {
        fontColor: ChartConfig.axesColor
      }
    },
    y: {
      grid: {
        color: ChartConfig.chartGridColor,
      },
      ticks: {
        fontColor: ChartConfig.axesColor,
        min: 100,
        max: 800
      }
    }
  }
};

// Main Component
export default class StackedAreaChartComponent extends Component {
  render() {
    const { labels, datasets } = this.props;
    const data = {
      labels,
      datasets
    };
    return (
      <Line data={data} options={options} height={60} />
    );
  }
}
