/* eslint-disable import/no-extraneous-dependencies */
import { Chart as ChartJS } from 'chart.js/auto';
import { Component, createRef } from 'react';
import {
  CandlestickController,
  CandlestickElement,
  OhlcController,
  OhlcElement,
} from 'chartjs-chart-financial';

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

    this.state = {
      candlestickData: {
        labels: [],
        datasets: [
          {
            data: [{ x: Date.parse('2023-08-02'), o: 221.13, h: 222.99, l: 222.13, c: 222.31 }],
            label: 'Candlestick Data',
            backgroundColor: '#000000',
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
          y: { beginAtZero: true, min: 0, max: 4000 },
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

  render() {
    return (
      <div>
        <div style={{ maxWidth: '600px', margin: '20px auto' }}>
          <canvas ref={this.chartRef} />
        </div>
      </div>
    );
  }
}
