import { useNavigate } from 'react-router-dom';

import { Container, ImageContainer, StyledLogo } from './styled';
import { LinkElement } from './Links';
import { ThemeSwitcher } from './ThemeSwitcher';

export const NavBar = (): JSX.Element => {
  const navigation = useNavigate();

  const handleLogoClick = () => {
    navigation('/');
  };

  return (
    <Container>
      <ImageContainer onClick={handleLogoClick}>
        <StyledLogo />
      </ImageContainer>
      <LinkElement />
      <ThemeSwitcher />
    </Container>
  );
};
