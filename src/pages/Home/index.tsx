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
import { useState } from 'react';
import { useCurrencyModal } from '@/utils/useCurrencyModal';
import { CurrencyModal } from '@/components/CurrencyModal';
import { useCurrencyRequest } from '@/utils/useCurrencyRequest';

export const HomePage = (): JSX.Element => {
  const [baseCurrency, setBaseCurrency] = useState<string>('USD');
  const { isShown, toggle } = useCurrencyModal();
  const { currency, loading, error } = useCurrencyRequest();

  const handleCardClick = (baseCurrency: string) => () => {
    setBaseCurrency(baseCurrency);
    toggle();
  };

  

  return (
    <Container>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <StyledSection>
          <CurrencyModal
            isShown={isShown}
            hide={toggle}
            currencyList={Object.keys(currency?.data || {})}
            baseCurrency={baseCurrency}
          />
          <SectionName>Stocks</SectionName>
          {Object.values(currency?.data || {}).map((coin) => (
            <Card
              key={coin.code}
              onClick={handleCardClick(coin.code)}
            >
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
