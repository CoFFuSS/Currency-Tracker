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
import { generateRandomCurrencyDataArray, getChartDataset } from './utils';
import { Props, State } from '@/types/timelinePage';

ChartJS.register(OhlcElement, OhlcController, CandlestickElement, CandlestickController);

export class TimelinePage extends Component<Props, State> {
  private chartRef = createRef<HTMLCanvasElement>();
  private chartInstance: ChartJS | null = null;

  constructor(props: Props) {
    super(props);

    this.chartRef = createRef<HTMLCanvasElement>();
    this.state = {
      options: {
        responsive: true,
        scales: {
          y: { beginAtZero: false, min: 0, max: 1000 },
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
      candlestickData: { labels: [], datasets: [] },
    };
  }

  componentDidMount() {
    const ctx = this.chartRef.current?.getContext('2d');
    const { options } = this.state;

    if (ctx) {
      // eslint-disable-next-line no-new
      this.chartInstance = new ChartJS(ctx, {
        type: 'candlestick',
        data: getChartDataset(generateRandomCurrencyDataArray()),
        options,
      });
    }
  }

  handleChartUpdate = () => {
    const ctx = this.chartRef.current?.getContext('2d');
    const {options} = this.state
  
    if (ctx && this.chartInstance) {
      this.chartInstance.destroy();

      this.chartInstance =  new ChartJS(ctx, {
        type: 'candlestick',
        data: getChartDataset(generateRandomCurrencyDataArray()),
        options
      });
  
      this.chartInstance.update();
    }
  }

  // componentDidUpdate() {
  //   // const { candlestickData, options } = this.state;

  //   if (this.chartRef.current) {
  //     const chart = new ChartJS(this.chartRef.current, {
  //       type: 'candlestick',

  //       data: {
  //         labels: [],
  //         datasets: [
  //           {
  //             backgroundColor: 'rgb(255, 99, 132)',
  //             borderColor: 'rgb(255, 99, 132)',
  //             data: [0, 10, 5, 2, 20, 30, 45],
  //           },
  //         ],
  //       },
  //     });

  //     chart.update();
  //   }
  // }

  render() {
    return (
      <div>
        <div style={{ maxWidth: '1200px', margin: '20px auto', maxHeight: '630px'}}>
          <canvas ref={this.chartRef} />
        </div>
        <button onClick={this.handleChartUpdate}>Generate random currency rate</button>
      </div>
    );
  }
}
