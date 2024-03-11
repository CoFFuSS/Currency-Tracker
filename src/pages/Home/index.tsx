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
import { DropDownList } from '@/components/DropDownList';

export const HomePage = (): JSX.Element => {
  const [selectedCurrency, setSelectedCurrency] = useState<string>('USD' as string);
  const [cardCurrency, setCardCurrency] = useState<string>('USD' as string);
  const { isShown, toggle } = useCurrencyModal();
  const { currency, loading, error } = useCurrencyRequest();

  const handleCardClick = (baseCurrency: string) => () => {
    setCardCurrency(baseCurrency);
    toggle();
  };

  const getSpecificCurrencyValue = (name: string) => {
    const filteredCurrencies = Object.values(currency?.data || {}).filter(
      (coin) => coin.code === name,
    );
    const specificCurrency = filteredCurrencies.find((coin) => coin.code === name);
    return specificCurrency?.value || 0;
  };

  const getDefinedPrice = (value: string = 'USD') => {
    return (+value / +getSpecificCurrencyValue(selectedCurrency)).toFixed(6);
  };

  return (
    <Container>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <>
          <StyledSection>
            <CurrencyModal
              isShown={isShown}
              hide={toggle}
              currencyList={currency?.data || {}}
              baseCurrency={cardCurrency}
            />
            <SectionName>Stocks</SectionName>
            {Object.values(currency?.data || {}).map((coin) => (
              <Card
                key={coin.code}
                onClick={handleCardClick(coin.code)}
              >
                <CardInfo>
                  <CardCurrency>{coin.code}</CardCurrency>
                  <CardPrice>{getDefinedPrice(coin.value)}</CardPrice>
                </CardInfo>
              </Card>
            ))}
          </StyledSection>
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
          <DropDownList
            currenciesList={Object.keys(currency?.data || '')}
            setSelectedCurrency={setSelectedCurrency}
          />
        </>
      )}
      {error && <p>Error: {error}</p>}
    </Container>
  );
};
