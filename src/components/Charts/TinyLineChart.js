/**
 * Tiny Line Chart Component
 */
import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

// chart config file
import ChartConfig from 'Constants/chart-config';

// Main Component
export default class TinyLineChart extends Component {
    render() {
        const { labels, label, borderColor, chartdata, pointBackgroundColor, height, pointBorderColor, borderWidth, xAxes,lineTension } = this.props;
        const data = (canvas) => {
            const ctx = canvas.getContext("2d");
            const _stroke = ctx.stroke;
            ctx.stroke = function () {
                ctx.save();
                ctx.shadowColor = ChartConfig.shadowColor;
                ctx.shadowBlur = 13;
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 12;
                _stroke.apply(this, arguments);
                ctx.restore();
            };
            return {
                labels: labels,
                datasets: [
                    {
                        label: label,
                        fill: false,
                        lineTension: lineTension,
                        fillOpacity: 0.3,
                        borderColor: borderColor,
                        borderWidth: borderWidth,
                        pointBorderColor: pointBorderColor,
                        pointBackgroundColor: pointBackgroundColor,
                        pointBorderWidth: borderWidth,
                        pointHoverBackgroundColor: pointBackgroundColor,
                        pointHoverBorderColor: pointBorderColor,
                        pointHoverBorderWidth: borderWidth,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: chartdata
                    }
                ]
            }
        }
        // chart options
        const options = {
            plugins:{
               legend: {
                  display: false
               }
            },            
            scales: {
               x: {
                  display: false,
                  ticks: {
                     min: 0
                  },
                  gridLines: {
                     display: false
                  }
               },
               y:{
                  display: false,
                  ticks: {
                     suggestedMin: 0,
                     beginAtZero: true
                  }
               }
            }
        };
        return (
            <Line data={data} options={options} height={height} />
        );
    }
}
