// eslint-disable-next-line import/no-extraneous-dependencies
import { HttpResponse, http } from 'msw';

import CurrencyResponse from './currencyResponse.json';

const postsHandler = http.get('/api/currencies', () => HttpResponse.json(CurrencyResponse));

export const handlers = [postsHandler];
