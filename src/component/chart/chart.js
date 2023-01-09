import React from 'react';
import { Line } from 'react-chartjs-2';

const Chart = (props) => {
    const chartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
          {
            label: 'Sales',
            data: [86, 67, 91, 87, 76],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
          }
        ]
      };

  return (
    <div>
      <div>
      <Line data={chartData} />
    </div>
    </div>
  );
}

export default Chart;
