import { ExpandableField } from '@/components/ExpandableField';
import { Container } from './styled';

export const Footer = () => {
  return (
    <Container>
      <ExpandableField
        title='Modsen Currency Tracker'
        content="Since then, the company has grown organically to. Starsup is the world's largest trading platform, with $12 billion worth of currency trading and 500,000 tickets sold daily to tens of thousands of traders worldwide."
      />
      <ExpandableField
        title='General'
        content='Market'
      />
    </Container>
  );
};
