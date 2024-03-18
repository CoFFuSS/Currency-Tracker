/* eslint-disable import/no-extraneous-dependencies */
import { Chart as ChartJS } from 'chart.js/auto';
import { Component, createRef } from 'react';
import {
  CandlestickController,
  CandlestickElement,
  OhlcController,
  OhlcElement,
} from 'chartjs-chart-financial';
import 'chartjs-adapter-moment';

ChartJS.register(OhlcElement, OhlcController, CandlestickElement, CandlestickController);
interface CandlestickData {
  x: number;
  o: number;
  h: number;
  l: number;
  c: number;
}

interface Dataset {
  data: CandlestickData[];
  label: string;
  backgroundColor: string;
  color: { up: string; down: string; unchanged: string };
  borderColor: string;
  borderWidth: number;
  pointRadius: number;
  pointHoverRadius: number;
}

interface CandlestickChartData {
  labels: Date[];
  datasets: Dataset[];
}

interface Options {
  responsive: boolean;
  scales: {
    y: { beginAtZero: boolean; min: number; max: number };
  };
  plugins: {
    title: {
      display: boolean;
      text: string;
    };
    legend: {
      display: boolean;
    };
  };
}

interface Props {}

interface State {
  candlestickData: CandlestickChartData;
  options: Options;
}

export class TimelinePage extends Component<Props, State> {
  chartRef = createRef<HTMLCanvasElement>();

  constructor(props: Props) {
    super(props);

    this.chartRef = createRef<HTMLCanvasElement>();
    this.handleChartUpdate = this.handleChartUpdate.bind(this);

    this.state = {
      candlestickData: {
        labels: [],
        datasets: [
          {
            data: []
              // { x: Date.parse('2023-03-17'), o: 224.13, h: 225.13, l: 221.13, c: 223.31 },
              // { x: Date.parse('2023-03-18'), o: 220.5, h: 222.8, l: 219.1, c: 221.75 },
              // { x: Date.parse('2023-03-19'), o: 226.4, h: 227.5, l: 224.1, c: 226.0 },
              // { x: Date.parse('2023-03-20'), o: 223.8, h: 225.4, l: 223.0, c: 224.9 },
              // { x: Date.parse('2023-03-21'), o: 222.9, h: 224.5, l: 221.8, c: 223.7 },
              // { x: Date.parse('2023-03-22'), o: 225.0, h: 226.3, l: 223.5, c: 225.8 },
              // { x: Date.parse('2023-03-23'), o: 224.0, h: 225.5, l: 223.0, c: 224.5 },
              // { x: Date.parse('2023-03-24'), o: 221.5, h: 223.2, l: 220.1, c: 222.8 },
              // { x: Date.parse('2023-03-25'), o: 222.7, h: 224.0, l: 221.6, c: 222.3 },
              // { x: Date.parse('2023-03-26'), o: 224.5, h: 225.0, l: 222.5, c: 223.0 },
              // { x: Date.parse('2023-03-27'), o: 222.8, h: 224.3, l: 221.5, c: 223.9 },
              // { x: Date.parse('2023-03-28'), o: 223.7, h: 225.0, l: 222.0, c: 223.4 },
              // { x: Date.parse('2023-03-29'), o: 223.5, h: 225.5, l: 222.8, c: 224.9 },
              // { x: Date.parse('2023-03-30'), o: 225.0, h: 226.3, l: 224.5, c: 225.7 },
              // { x: Date.parse('2023-03-31'), o: 225.8, h: 227.0, l: 225.0, c: 226.2 },
              // { x: Date.parse('2023-04-01'), o: 227.0, h: 228.5, l: 226.5, c: 227.8 },
              // { x: Date.parse('2023-04-02'), o: 228.0, h: 229.0, l: 227.0, c: 227.5 },
              // { x: Date.parse('2023-04-03'), o: 227.5, h: 229.0, l: 227.0, c: 228.8 },
              // { x: Date.parse('2023-04-04'), o: 228.9, h: 230.0, l: 228.0, c: 229.4 },
              // { x: Date.parse('2023-04-05'), o: 230.0, h: 231.0, l: 229.0, c: 229.5 },
              // { x: Date.parse('2023-04-06'), o: 229.6, h: 230.5, l: 228.5, c: 229.0 },
              // { x: Date.parse('2023-04-07'), o: 228.5, h: 229.5, l: 227.8, c: 228.0 },
              // { x: Date.parse('2023-04-08'), o: 227.9, h: 228.5, l: 226.0, c: 226.5 },
              // { x: Date.parse('2023-04-09'), o: 226.4, h: 227.0, l: 225.5, c: 226.8 },
              // { x: Date.parse('2023-04-10'), o: 226.5, h: 227.8, l: 225.5, c: 227.4 },
              // { x: Date.parse('2023-04-11'), o: 227.6, h: 228.0, l: 226.5, c: 227.0 },
              // { x: Date.parse('2023-04-12'), o: 227.0, h: 228.5, l: 226.8, c: 227.5 },
              // { x: Date.parse('2023-04-13'), o: 227.5, h: 228.5, l: 226.8, c: 227.0 },
              // { x: Date.parse('2023-04-14'), o: 227.0, h: 228.0, l: 226.5, c: 227.0 },
              // { x: Date.parse('2023-04-15'), o: 227.0, h: 228.5, l: 226.8, c: 227.5 },
            ,
            label: 'Candlestick Data',
            backgroundColor: '#000000',
            color: {
              up: 'rgba(80, 160, 115, 1',
              down: 'rgba(215, 85, 65, 1',
              unchanged: 'rgba(90, 90, 90, 1',
            },
            borderColor: 'blue',
            borderWidth: 1,
            pointRadius: 0,
            pointHoverRadius: 0,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: { beginAtZero: false, min: 0, max: 9999 },
        },
        plugins: {
          title: {
            display: true,
            text: 'Candlestick Chart',
          },
          legend: {
            display: false,
          },
        },
      },
    };
  }

  componentDidMount() {
    const ctx = this.chartRef.current?.getContext('2d');
    const { candlestickData, options } = this.state;

    if (ctx) {
      // eslint-disable-next-line no-new
      new ChartJS(ctx, {
        type: 'candlestick',
        data: candlestickData,
        options,
      });
    }
  }

  componentDidUpdate() {
    // const { candlestickData, options } = this.state;

    if (this.chartRef.current) {
      const chart = new ChartJS(this.chartRef.current, {
        type: 'candlestick',

        // The data for our dataset
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
            {
              label: 'My First dataset',
              backgroundColor: 'rgb(255, 99, 132)',
              borderColor: 'rgb(255, 99, 132)',
              data: [0, 10, 5, 2, 20, 30, 45],
            },
          ],
        },
      });

      chart.update();
    }
  }

  generateRandomCurrencyDataArray(): CandlestickData[] {
    const startDate = new Date('2023-03-17').getTime();
    const dayMilliseconds = 24 * 60 * 60 * 1000; // количество миллисекунд в дне
    const currencyDataArray: CandlestickData[] = [];

    for (let i = 0; i < 30; i++) {
        const randomDayOffset = i * dayMilliseconds; // смещение в пределах 30 дней

        const randomTimestamp = startDate + randomDayOffset;
        currencyDataArray.push({
            x: randomTimestamp,
            o: Math.random() * 1000, // случайное открытие
            h: Math.random() * 1000, // случайный максимум
            l: Math.random() * 1000, // случайный минимум
            c: Math.random() * 1000  // случайное закрытие
        });
    }

    return currencyDataArray;
}
handleChartUpdate() { 
  this.setState({
    candlestickData: {
      ...this.state.candlestickData,
      datasets: [{
        ...this.state.candlestickData.datasets[0],
        data: this.generateRandomCurrencyDataArray(),
      }]
    }
  });
  this.forceUpdate()
}

  render() {
    return (
      <div>
        <div style={{ maxWidth: '600px', margin: '20px auto' }}>
          <canvas ref={this.chartRef} />
        </div>
        <button onClick={this.handleChartUpdate}>Generate random currency rate</button>
      </div>
    );
  }
}
