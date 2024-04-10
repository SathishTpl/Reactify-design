import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import ChartConfig from 'Constants/chart-config';

const data = {
   labels: [
      'Series 1',
      'Series 2',
      'Series 3'
   ],
   datasets: [{
      data: [250, 25, 50],
      backgroundColor: [
         ChartConfig.color.primary,
         ChartConfig.color.warning,
         ChartConfig.color.success
      ],
      hoverBackgroundColor: [
         ChartConfig.color.primary,
         ChartConfig.color.warning,
         ChartConfig.color.success
      ]
   }]
};

const options = {
   plugins:{
      legend:{
         display: false,
         labels:{
            fontColor: ChartConfig.legendFontColor
         }
      }
   },
   cutout: 50,
   responsive: true,
   maintainAspectRatio:false
};

function SubscriberDoughnutChart() {
   return (
      <Doughnut data={data} options={options} height={170} />
   );
}

export default SubscriberDoughnutChart