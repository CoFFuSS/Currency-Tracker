import { ContactBlock, Container, GeneralText, SubText } from './styled';

export const ContactPage = (): JSX.Element => (
  <Container>
    <GeneralText>Our office located at</GeneralText>
    <SubText>city Vitebsk street Mongola building 3 </SubText>
    <GeneralText>Contact us</GeneralText>
    <ContactBlock>
      <SubText>email: business@money.kz</SubText>
      <SubText>phone: +14888841</SubText>
    </ContactBlock>
  </Container>
);
