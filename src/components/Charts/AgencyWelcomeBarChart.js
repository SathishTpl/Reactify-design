import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import ChartConfig from 'Constants/chart-config';

const options = {
   plugins:{
      legend: {
         display: false
      },   
   },   
   tooltips: {
      titleSpacing: 6,
      cornerRadius: 5
   },
   scales: {
      x:{
         gridLines: {
            display: false,
            color: ChartConfig.chartGridColor,
            drawBorder: false
         },
         ticks: {
            fontColor: ChartConfig.axesColor
         },
         display: false,
      },
      y:{
         gridLines: {
            display: false,
            color: ChartConfig.chartGridColor,
            drawBorder: false
         },
         ticks: {
            fontColor: ChartConfig.axesColor,
         },
         display: false
      }
   }
};

export default class AgencyWelcomeBarChart extends Component {
   render() {
      const { labels, color } = this.props;
      const data = {
         labels: labels,
         datasets: [
            {
					barPercentage: 2,
         		categoryPercentage: 0.275,
               backgroundColor: color,
               borderColor: color,
               borderWidth: 1,
               hoverBackgroundColor: color,
               hoverBorderColor: color,
               data: this.props.data
            }
         ]
      }
      return (
         <Bar data={data} options={options} height={80} />
      );
   }
}
