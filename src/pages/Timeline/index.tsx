// eslint-disable-next-line import/no-extraneous-dependencies
import { BarElement, CategoryScale, Chart, Legend, LinearScale, Tooltip } from 'chart.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Bar } from 'react-chartjs-2';

Chart.register(CategoryScale, LinearScale, BarElement, Legend, Tooltip);

export const TimelinePage = () => {
  const barChartData = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    datasets: [
      {
        data: [1234, 2345, 3456],
        label: 'Infected People',
        borderColor: '#3333ff',
        backgroundColor: 'rgba(0, 0, 255, 0.5)',
        fill: true,
      },
      {
        data: [1111, 2222, 3333],
        label: 'Deaths People',
        borderColor: '#ff3333',
        backgroundColor: 'rgba(255, 0, 0, 0.5)',
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: { beginAtZero: false, min: -1000, max: 4000 },
    },
    plugins: {
      title: {
        display: true,
        text: 'Users Gained between 2016-2020',
      },
      legend: {
        display: false,
      },
      customCanvasBackgroundColor: { color: 'black' },
    },
  };

  return (
    <Bar
      width={130}
      height={50}
      options={options}
      data={barChartData}
    />
  );
};
