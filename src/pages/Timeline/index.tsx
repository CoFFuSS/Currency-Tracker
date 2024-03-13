/* eslint-disable import/no-extraneous-dependencies */
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
  scales: {
    y: { beginAtZero: false, suggestedMin: 300 },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [400, 500, 600, 700, 200],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: [700, 600, 800, 400, -100],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export function TimelinePage() {
  return (
    <Bar
      options={options}
      data={data}
    />
  );
}
