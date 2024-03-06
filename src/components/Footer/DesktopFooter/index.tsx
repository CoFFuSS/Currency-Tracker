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
import { Fragment } from 'react';

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
          <Fragment key={title}>
            <LinksContainer>
              {title}
              <LinksContent>{content}</LinksContent>
            </LinksContainer>
          </Fragment>
        ))}
      </Content>
      <Copyright>
        <CopyrightText>{copyright}</CopyrightText>
      </Copyright>
    </Container>
  );
};
