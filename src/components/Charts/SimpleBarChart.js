/**
 * Simple Bar Chart Component
 */
import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

const options = {
  plugins:{
    legend: {
      display: false
    }  
  },
  scales: {
    x: {
      display: false,
    },
    y: {
      display: false,
      ticks: {
        beginAtZero: true
      }
    }
  }
};

export default class BarChart extends Component {
  render() {
    const { labels, datasets } = this.props;
    const data = {
      labels,
      datasets
    }
    return (
      <Bar data={data} options={options} height={80} />
    );
  }
}
