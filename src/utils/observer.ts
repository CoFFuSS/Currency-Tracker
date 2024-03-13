import { response } from '@/constants';

export class Observer {
  private observers: ((data: typeof response) => void)[] = [];

  private data!: typeof response;

  constructor() {
    this.observers = [];
  }

  subscribe(fn: (data: typeof response) => void): void {
    this.observers.push(fn);
    fn(this.data);
  }

  unsubscribe(fn: (data: typeof response) => void): void {
    this.observers = this.observers.filter((subscriber) => subscriber !== fn);
  }

  setData(data: typeof response) {
    this.data = data;
    this.observers.forEach((observer) => observer(this.data));
  }

  getData() {
    return this.data;
  }
}

// class CurrencyObserver {
//   private observable = new Observer();

//   async fetchCurrencyData() {
//     try {
//       const response = await axios.get('/api/currencies');
// 			const data = response.data;
//       this.observable.setData({ currencies: data.currencies });
//     } catch (error) {
//       console.error('Ошибка при получении данных о валютах:', error);
//     }
//   }
// }

export const CurrencyObservable = new Observer();
