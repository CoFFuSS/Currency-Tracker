import { InfoBlock, LogoContainer, StyledLogo, Title } from '@/components/Footer/styled';
import { copyright, routes_options, title } from '../mock';
import {
  Container,
  Content,
  Copyright,
  CopyrightText,
  LinksContainer,
  LinksContent,
} from './styled';

export const DesktopFooter = () => {
  return (
    <Container>
      <Content>
        <InfoBlock>
          <LogoContainer>
            <StyledLogo />
          </LogoContainer>
          <Title>{title}</Title>
        </InfoBlock>
        {routes_options.map(({ title, content }) => (
          <LinksContainer key={title}>
            {title}
            <LinksContent>{content}</LinksContent>
          </LinksContainer>
        ))}
      </Content>
      <Copyright>
        <CopyrightText>{copyright}</CopyrightText>
      </Copyright>
    </Container>
  );
};
