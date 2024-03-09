import {
  Container,
  Content,
  Copyright,
  CopyrightText,
  InfoBlock,
  InfoText,
  LogoContainer,
  StyledLogo,
  Title,
  TitleBlock,
} from './styled';
import { copyright, infoText, routes_options, title } from './mock';
import { ExpandableField } from '../ExpandableField';

export const Footer = () => {
  return (
    <Container>
      <Content>
        <InfoBlock>
          <TitleBlock>
            <LogoContainer>
              <StyledLogo />
            </LogoContainer>
            <Title>{title}</Title>
          </TitleBlock>
          <InfoText>{infoText}</InfoText>
        </InfoBlock>
        {routes_options.map(({ title, content }) => (
          <ExpandableField
            key={title}
            title={title}
            content={content}
          />
        ))}
      </Content>
      <Copyright>
        <CopyrightText>{copyright}</CopyrightText>
      </Copyright>
    </Container>
  );
};
