import { useState } from 'react';

import { useCurrencyModal } from '@/hooks/useCurrencyModal';
import { CurrencyModal } from '@/components/CurrencyModal';
import { CurrenciesList } from '@/components/CurrenciesList';
import { CurrencyIcons } from '@/constants';
import { getCurrenciesName, getDefinedPrice } from '@/utils/mainPage';
import { useCurrencyRequest } from '@/hooks/useCurrencyRequest';

import {
  Card,
  CardContainer,
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

  return (
    <Container>
      <CurrenciesList
        currenciesList={getCurrenciesName(currency).filter((name) => name !== selectedCurrency)}
        setSelectedCurrency={setSelectedCurrency}
        defaultValue={selectedCurrency}
        disable={false}
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
            <CardContainer>
              {Object.values(currency?.data ?? {}).map((coin) => (
                <Card
                  key={coin.code}
                  onClick={handleCardClick(coin.code)}
                >
                  <CardItem>
                    {CurrencyIcons.QUOTES_SECTION.filter((item) => item.name === coin.code).map(
                      ({ icon, name }) => (
                        <SvgIcon key={name}>{icon}</SvgIcon>
                      ),
                    )}

                    <CardInfo>
                      <CardCurrency>{coin.code}</CardCurrency>
                      <CardPrice>
                        {getDefinedPrice(currency, selectedCurrency, coin.value)}
                      </CardPrice>
                    </CardInfo>
                  </CardItem>
                </Card>
              ))}
            </CardContainer>
          </StyledSection>
        </>
      )}
      {error && <p>Error: {error}</p>}
    </Container>
  );
};
