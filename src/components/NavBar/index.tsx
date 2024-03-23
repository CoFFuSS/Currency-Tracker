import { Container, ImageContainer, StyledLogo } from './styled';
import { LinkElement } from './Links';
import { ThemeSwitcher } from './ThemeSwitcher';

export const NavBar = () => (
  <Container>
    <ImageContainer to='/'>
      <StyledLogo />
    </ImageContainer>
    <LinkElement />
    <ThemeSwitcher />
  </Container>
);
