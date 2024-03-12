import { CurrencyResponse } from '@/interfaces/common';

export const getSpecificCurrencyValue = (name: string, currency: CurrencyResponse | undefined) => {
  const filteredCurrencies = Object.values(currency?.data || {}).filter(
    (coin) => coin.code === name,
  );
  const specificCurrency = filteredCurrencies.find((coin) => coin.code === name);
  return specificCurrency?.value || 0;
};

export const getDefinedPrice = (
  value: string = 'USD',
  selectedValue: string,
  currency: CurrencyResponse | undefined,
) => {
  return (+value / +getSpecificCurrencyValue(selectedValue, currency)).toFixed(6);
};

// const getCurrenciesName = (data: Record<string, { code: string; value: string }>) => {
//   return Object.keys(data);
// };

export const getCurrenciesName = (currency: CurrencyResponse | undefined) => {
  return Object.keys(currency?.data || {});
};

export const getCurrencyRelation = (
  fromValue: string,
  toValue: string,
  currency: CurrencyResponse | undefined,
) => {
  return (
    +getSpecificCurrencyValue(fromValue, currency) / +getSpecificCurrencyValue(toValue, currency)
  ).toFixed(9);
};

