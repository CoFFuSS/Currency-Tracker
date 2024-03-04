import { StyledHeaderText, StyledHeader, StyledHeaderSubText } from './styled';

export const Header = (): JSX.Element => (
  <StyledHeader>
    <StyledHeaderText>Modsen Currency</StyledHeaderText>
    <StyledHeaderText>Tracker</StyledHeaderText>
    <StyledHeaderSubText>Cotacão do dólar e outras moedas internacionais.</StyledHeaderSubText>
  </StyledHeader>
);
