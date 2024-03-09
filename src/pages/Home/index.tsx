import {
  Card,
  CardCurrency,
  CardInfo,
  CardPrice,
  Container,
  SectionName,
  StyledSection,
  SvgIcon,
} from './styled';

import { options } from './mock';
const { QUOTES_SECTION } = options;
import axios from 'axios';
import { useEffect, useState } from 'react';

interface CurrencyResponse {
  meta: {
    last_updated_at: string;
  };
  data: Record<string, { code: string; value: string }>;
}

export const HomePage = (): JSX.Element => {
  const [currency, setCurrency] = useState<CurrencyResponse | undefined>();
  const [loading, setLoading]: [boolean, (loading: boolean) => void] = useState<boolean>(true);
  const [error, setError]: [string, (error: string) => void] = useState('');

  useEffect(() => {
    const item = localStorage.getItem('CurrencyCaches');
    item !== null
      ? (setCurrency(JSON.parse(item)), setLoading(false))
      : axios
          .get<CurrencyResponse>('/api/currencies', {
            headers: {
              'Content-Type': 'application/json',
            },
          })
          .then((response) => {
            console.log(response.data);
            setCurrency(response.data as CurrencyResponse);
            localStorage.setItem(
              'CurrencyCaches',
              JSON.stringify(response.data as CurrencyResponse),
            );

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
  return (
    <Container>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <StyledSection>
          <SectionName>Stocks</SectionName>
          {Object.values(currency?.data || {}).map((coin) => (
            <Card key={coin.code}>
              <CardInfo>
                <CardCurrency>{coin.code}</CardCurrency>
                <CardPrice>{coin.value}</CardPrice>
              </CardInfo>
            </Card>
          ))}
        </StyledSection>
      )}
      {error && <p>Error: {error}</p>}
      <StyledSection>
        <SectionName>Quotes</SectionName>
        {QUOTES_SECTION.map(({ icon, currency, price }) => (
          <Card key={currency}>
            <SvgIcon>{icon}</SvgIcon>
            <CardInfo>
              <CardCurrency>{currency}</CardCurrency>
              <CardPrice>{price}</CardPrice>
            </CardInfo>
          </Card>
        ))}
      </StyledSection>
    </Container>
  );
};
