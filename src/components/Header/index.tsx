import {
  Container,
  TextContainer,
  MainTextContainer,
  SubTextContainer,
  SubText,
  LogoContainer,
  StyledHeaderLogo,
  HeaderContainer,
  MainText,
} from './styled';

export const Header = (): JSX.Element => (
  <HeaderContainer>
    <Container>
      <TextContainer>
        <MainTextContainer>
          <MainText>Modsen Currency</MainText>
          <MainText>Tracker</MainText>
        </MainTextContainer>

        <SubTextContainer>
          <SubText>Quotes for the dollar and other</SubText>
          <SubText>international currencies.</SubText>
        </SubTextContainer>
      </TextContainer>

      <LogoContainer>
        <StyledHeaderLogo />
      </LogoContainer>
    </Container>
  </HeaderContainer>
);
