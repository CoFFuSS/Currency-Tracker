import { CACHE_LIFETIME } from '@/constants';
import axios from 'axios';
import { useEffect, useState } from 'react';

interface CurrencyResponse {
  meta: {
    last_updated_at: string;
  };
  data: Record<string, { code: string; value: string }>;
}


export const useCurrencyRequest = () => {
  const [currency, setCurrency] = useState<CurrencyResponse | undefined>();
  const [loading, setLoading]: [boolean, (loading: boolean) => void] = useState<boolean>(true);
  const [error, setError]: [string, (error: string) => void] = useState('');

  useEffect(() => {
    const cache = localStorage.getItem('CurrencyCaches');
    const cacheTime = localStorage.getItem('CurrencyCachesTime');
    cache !== null && Date.now() - Number(cacheTime) < CACHE_LIFETIME
      ? (setCurrency(JSON.parse(cache)), setLoading(false))
      : axios
          .get<CurrencyResponse>('/api/currencies', {
            headers: {
              'Content-Type': 'application/json',
            },
          })
          .then((response) => {
            setCurrency(response.data as CurrencyResponse);
            localStorage.setItem(
              'CurrencyCaches',
              JSON.stringify(response.data as CurrencyResponse),
            );
            localStorage.setItem('CurrencyCachesTime', Date.now().toString());

            setLoading(false);
          })
          .catch((ex) => {
            const error =
              ex.response.status === 404
                ? 'Resource Not found'
                : 'An unexpected error has occurred';
            setError(error);
            setLoading(false);
          });
  }, []);
  return { currency, loading, error };
};
