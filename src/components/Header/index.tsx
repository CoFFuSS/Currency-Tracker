import {
  StyledHeaderText,
  StyledHeader,
  StyledHeaderSubText,
  StyledLogoContainer,
  StyledHeaderLogo,
  StyledHeaderTextContainer,
  StyledHeaderContainer,
} from './styled';

export const Header = (): JSX.Element => (
  <StyledHeader>
    <StyledHeaderContainer>
      <StyledHeaderTextContainer>
        <StyledHeaderText>
          Modsen Currency <br />
          Tracker
        </StyledHeaderText>
        <StyledHeaderSubText>
          Quotes for the dollar and other <br />
          international currencies.
        </StyledHeaderSubText>
      </StyledHeaderTextContainer>

      <StyledLogoContainer>
        <StyledHeaderLogo />
      </StyledLogoContainer>
    </StyledHeaderContainer>
  </StyledHeader>
);
