/* eslint-disable import/no-extraneous-dependencies */

import { Chart as ChartJS } from 'chart.js/auto';
import { PureComponent, createRef } from 'react';
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
import {
  ButtonContainer,
  ChartContainer,
  ControlBlock,
  StyledInput,
  StyledLabel,
  SubmitButton,
} from './styled';

export const labelData = {
  selectedDate: {
    text: 'Select Date:',
    id: 'selected-date',
    type: 'date',
  },
  minPrice: {
    text: 'Minimum Price:',
    id: 'min-price',
    type: 'number',
  },
  maxPrice: {
    text: 'Maximum Price:',
    id: 'max-price',
    type: 'number',
  },
};

ChartJS.register(OhlcElement, OhlcController, CandlestickElement, CandlestickController);

export class TimelinePage extends PureComponent<Props, State> implements Observer {
  private readonly chartRef = createRef<HTMLCanvasElement>();

  private chartInstance: ChartJS | null = null;

  constructor(props: Props) {
    super(props);

    this.chartRef = createRef<HTMLCanvasElement>();

    this.state = {
      chartDataset: [],

      minPrice: 0,

      maxPrice: 1000,

      selectedDate: new Date().toISOString().split('T')[0],
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

  handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ selectedDate: event.target.value });
  };

  handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { minPrice, maxPrice, selectedDate } = this.state;

    const { scrollY } = window;

    const newDataset = generateRandomCurrencyDataArray(minPrice, maxPrice, selectedDate);

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
    const { minPrice, maxPrice, selectedDate } = this.state;

    return (
      <form onSubmit={this.handleFormSubmit}>
        <ControlBlock>
          <StyledLabel htmlFor='selected-date'>
            Select Date:
            <StyledInput
              id='selected-date'
              type='date'
              value={selectedDate}
              onChange={this.handleDateChange}
            />
          </StyledLabel>

          <StyledLabel htmlFor='min-price'>
            Minimum Price:
            <StyledInput
              id='min-price'
              type='number'
              value={minPrice}
              onChange={this.handleMinPriceChange}
            />
          </StyledLabel>

          <StyledLabel htmlFor='max-price'>
            Maximum Price:
            <StyledInput
              id='max-price'
              type='number'
              value={maxPrice}
              onChange={this.handleMaxPriceChange}
            />
          </StyledLabel>

          <ButtonContainer>
            <SubmitButton type='submit'>Submit</SubmitButton>
          </ButtonContainer>
        </ControlBlock>

        <ChartContainer>
          <canvas ref={this.chartRef} />
        </ChartContainer>
      </form>
    );
  }
}
