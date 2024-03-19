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
import { generateRandomCurrencyDataArray, getChartDataset, getChartOptions } from './utils';
import { Props, State } from '@/types/timelinePage';

ChartJS.register(OhlcElement, OhlcController, CandlestickElement, CandlestickController);

export class TimelinePage extends Component<Props, State> {
  private chartRef = createRef<HTMLCanvasElement>();
  private chartInstance: ChartJS | null = null;

  constructor(props: Props) {
    super(props);

    this.chartRef = createRef<HTMLCanvasElement>();
    this.state = {
      scales: {
        y: {beginAtZero: false, min: 0, max: 1000}
      },
      chartDataset: generateRandomCurrencyDataArray(),
      candlestickData: { labels: [], datasets: [] },
    };
  }

  componentDidMount() {
    const ctx = this.chartRef.current?.getContext('2d');
    const {scales, chartDataset} = this.state

    if (ctx) {
      this.chartInstance = new ChartJS(ctx, {
        type: 'candlestick',
        data: getChartDataset(chartDataset),
        options: getChartOptions(scales),
      });
    }
  }

  handleChartUpdate = () => {
    const ctx = this.chartRef.current?.getContext('2d');
    const {scales} = this.state
  
    if (ctx && this.chartInstance) {
      this.chartInstance.destroy();

      const newDataset = generateRandomCurrencyDataArray();
      this.setState({chartDataset: newDataset})
      const {chartDataset} = this.state

      this.chartInstance =  new ChartJS(ctx, {
        type: 'candlestick',
        data: getChartDataset(chartDataset),
        options: getChartOptions(scales)
      });
  
      this.chartInstance.update();
    }
  }

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
