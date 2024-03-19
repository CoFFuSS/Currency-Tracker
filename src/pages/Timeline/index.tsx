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
import { CandlestickData, Props, State } from '@/types/timelinePage';
import { Observer, currencyObservable } from '@/utils/observer';

import { generateRandomCurrencyDataArray, getChartDataset, getChartOptions } from './utils';
import { ChartContainer } from './styled';

ChartJS.register(OhlcElement, OhlcController, CandlestickElement, CandlestickController);

export class TimelinePage extends Component<Props, State> implements Observer {
  private readonly chartRef = createRef<HTMLCanvasElement>();

  private chartInstance: ChartJS | null = null;

  constructor(props: Props) {
    super(props);

    this.chartRef = createRef<HTMLCanvasElement>();

    this.state = {
      chartDataset: [],
      minPrice: 0,
      maxPrice: 1000,
    };
  }

  componentDidMount(): void {
    const ctx = this.chartRef.current?.getContext('2d');
    const { chartDataset, minPrice, maxPrice } = this.state;

    if (ctx) {
      this.chartInstance = new ChartJS(ctx, {
        type: 'candlestick',
        data: getChartDataset(chartDataset),
        options: getChartOptions(minPrice, maxPrice),
      });
    }

    currencyObservable.subscribe(this);
  }

  componentWillUnmount(): void {
    currencyObservable.unsubscribe(this);
  }

  handleMinPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ minPrice: parseFloat(event.target.value) });
  };

  handleMaxPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ maxPrice: parseFloat(event.target.value) });
  };

  handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { minPrice, maxPrice } = this.state;

    const { scrollY } = window;

    const newDataset = generateRandomCurrencyDataArray(minPrice, maxPrice);
    this.setState({ chartDataset: newDataset });
    currencyObservable.setData(newDataset, minPrice, maxPrice);

    window.scrollTo(0, scrollY);
  };

  // eslint-disable-next-line react/no-unused-class-component-methods
  update = (data: CandlestickData[], minPrice: number, maxPrice: number) => {
    const ctx = this.chartRef.current?.getContext('2d');

    if (ctx && this.chartInstance) {
      this.chartInstance.destroy();

      this.chartInstance = new ChartJS(ctx, {
        type: 'candlestick',
        data: getChartDataset(data),
        options: getChartOptions(minPrice, maxPrice),
      });

      this.chartInstance.update();
    }
  };

  render() {
    const { minPrice, maxPrice } = this.state;

    return (
      <form onSubmit={this.handleFormSubmit}>
        <div>
          <label htmlFor='min-price'>
            Minimum Price:
            <input
              id='min-price'
              type='number'
              value={minPrice}
              onChange={this.handleMinPriceChange}
            />
          </label>
        </div>
        <div>
          <label htmlFor='max-price'>
            Maximum Price:
            <input
              id='max-price'
              type='number'
              value={maxPrice}
              onChange={this.handleMaxPriceChange}
            />
          </label>
        </div>
        <div>
          <button type='submit'>Generate random currency rate</button>
        </div>
        <ChartContainer>
          <canvas ref={this.chartRef} />
        </ChartContainer>
      </form>
    );
  }
}
