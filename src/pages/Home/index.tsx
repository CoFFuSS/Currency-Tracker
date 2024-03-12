import { useState } from 'react';

import { useCurrencyModal } from '@/hooks/useCurrencyModal';
import { CurrencyModal } from '@/components/CurrencyModal';
import { CurrenciesList } from '@/components/CurrenciesList';
import { CurrencyIcons } from '@/constants';
import { getCurrenciesName, getDefinedPrice } from '@/utils/mainPage';
import { useCurrencyRequest } from '@/hooks/useCurrencyRequest';

import {
  Card,
  CardCurrency,
  CardInfo,
  CardItem,
  CardPrice,
  Container,
  SectionName,
  StyledSection,
  SvgIcon,
} from './styled';

export const HomePage = () => {
  const [selectedCurrency, setSelectedCurrency] = useState<string>('USD');
  const [cardCurrency, setCardCurrency] = useState<string>('USD');
  const { isShown, toggle } = useCurrencyModal();
  const { currency, loading, error } = useCurrencyRequest();

  const handleCardClick = (coinCode: string) => () => {
    setCardCurrency(coinCode);
    toggle();
  };

  console.log(currency);

  return (
    <Container>
      <CurrenciesList
        currenciesList={getCurrenciesName(currency).filter((name) => name !== selectedCurrency)}
        setSelectedCurrency={setSelectedCurrency}
        defaultValue={selectedCurrency}
      />
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <>
          <StyledSection>
            <CurrencyModal
              isShown={isShown}
              hide={toggle}
              currencyList={currency}
              cardCurrency={cardCurrency}
              givenCurrency={selectedCurrency}
            />
            <SectionName>Stocks</SectionName>
            {Object.values(currency?.data ?? {}).map((coin) => (
              <Card
                key={coin.code}
                onClick={handleCardClick(coin.code)}
              >
                <CardItem>
                  <SvgIcon>
                    {CurrencyIcons.QUOTES_SECTION.filter((item) => item.currency === coin.code).map(
                      ({ icon }) => icon,
                    )}
                  </SvgIcon>
                  <CardInfo>
                    <CardCurrency>{coin.code}</CardCurrency>
                    <CardPrice>{getDefinedPrice(currency, selectedCurrency, coin.value)}</CardPrice>
                  </CardInfo>
                </CardItem>
              </Card>
            ))}
          </StyledSection>
        </>
      )}
      {error && <p>Error: {error}</p>}
    </Container>
  );
};
