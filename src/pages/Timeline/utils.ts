import { CandlestickData } from '@/types/timelinePage';

export const getRandomDataWithArguments = (min: number, max: number) =>
  Number(Math.random() * (max - min + 1) + min);

const dayMilliseconds = 24 * 60 * 60 * 1000;

export const generateRandomCurrencyDataArray = (): CandlestickData[] => {
  const startDate = new Date('2023-03-17').getTime();
  const currencyDataArray: CandlestickData[] = [];

  for (let i = 0; i < 30; i += 1) {
    const randomDayOffset = i * dayMilliseconds;
    const o = Math.random() * 1000;
    const c = Math.random() * 1000;
    const h = getRandomDataWithArguments(Math.max(o, c), 1000);
    const l = getRandomDataWithArguments(0, Math.min(c, o));

    const randomTimestamp = startDate + randomDayOffset;

    currencyDataArray.push({
      x: randomTimestamp,
      o,
      h,
      l,
      c,
    });
  }

  return currencyDataArray;
};

export const getChartDataset = (dataset: CandlestickData[]) => ({
  labels: [],
  datasets: [
    {
      data: dataset,
      label: 'Candlestick Data',
      backgroundColor: '#000000',
      color: {
        up: 'rgba(80, 160, 115, 1)',
        down: 'rgba(215, 85, 65, 1)',
        unchanged: 'rgba(90, 90, 90, 1)',
      },
      pointRadius: 0,
      pointHoverRadius: 0,
    },
  ],
});

export const getChartOptions = (scales: {
  y: { beginAtZero: boolean; min: number; max: number };
}) => ({
  responsive: true,
  scales,
  plugins: {
    title: {
      display: true,
      text: 'Candlestick Chart',
    },
    legend: {
      display: false,
    },
  },
});
