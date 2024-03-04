import { StyledHeaderText, StyledHeader, StyledHeaderSubText } from './styled';

export const Header = (): JSX.Element => (
  <StyledHeader>
    <StyledHeaderText>MODSEN CURRENCY TRACKER</StyledHeaderText>
    <StyledHeaderSubText>
      Cotacão do dólar e outras moedas internacionais.
    </StyledHeaderSubText>
  </StyledHeader>
);
