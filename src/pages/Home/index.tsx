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

import { useState } from 'react';
import { useCurrencyModal } from '@/hooks/useCurrencyModal';
import { CurrencyModal } from '@/components/CurrencyModal';
import { useCurrencyRequest } from '@/hooks/useCurrencyRequest';
import { DropDownList } from '@/components/DropDownList';
import { CurrencyIcons } from '@/constants';
import { getCurrenciesName, getDefinedPrice } from '@/utils/mainPage';

export const HomePage = (): JSX.Element => {
  const [selectedCurrency, setSelectedCurrency] = useState<string>('USD' as string);
  const [cardCurrency, setCardCurrency] = useState<string>('USD' as string);
  const { isShown, toggle } = useCurrencyModal();
  const { currency, loading, error } = useCurrencyRequest();

  const handleCardClick = (cardCurrency: string) => () => {
    setCardCurrency(cardCurrency);
    toggle();
  };
  return (
    <Container>
      <DropDownList
        currenciesList={getCurrenciesName(currency).filter(
          (name) => name !== selectedCurrency,
        )}
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
            {Object.values(currency?.data || {}).map((coin) => (
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
                    <CardPrice>{getDefinedPrice(coin.value, selectedCurrency, currency)}</CardPrice>
                  </CardInfo>
                </CardItem>
              </Card>
            ))}
          </StyledSection>
          {/* <StyledSection>
            <SectionName>Quotes</SectionName>
            {QUOTES_SECTION.map(({ icon, currency, price }) => (
              <Card key={currency}>
                <SvgIcon>{icon}</SvgIcon>
                <CardItem>
                  <CardCurrency>{currency}</CardCurrency>
                  <CardPrice>{price}</CardPrice>
                </CardItem>
              </Card>
            ))}
          </StyledSection> */}
        </>
      )}
      {error && <p>Error: {error}</p>}
    </Container>
  );
};
