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
const { STOCKS_SECTION, QUOTES_SECTION } = options;

export const HomePage = (): JSX.Element => (
  <Container>
    <StyledSection>
      <SectionName>Stocks</SectionName>
      {STOCKS_SECTION.map(({ icon, currency, price }) => (
        <Card>
          <SvgIcon>{icon}</SvgIcon>
          <CardInfo>
            <CardCurrency>{currency}</CardCurrency>
            <CardPrice>{price}</CardPrice>
          </CardInfo>
        </Card>
      ))}
    </StyledSection>
    <StyledSection>
      <SectionName>Quotes</SectionName>
      {QUOTES_SECTION.map(({ icon, currency, price }) => (
        <Card>
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
