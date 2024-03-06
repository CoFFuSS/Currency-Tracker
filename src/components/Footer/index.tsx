import useWindowDimensions from '@/utils/useWindowDimensions';
import themeSwitcher from '@/store';
import { MobileFooter } from './MobileFooter';
import { Container } from './styled';
import { DesktopFooter } from './DesktopFooter';

export const Footer = () => {
  const { width } = useWindowDimensions();
  return (
    <Container>
      {width > +themeSwitcher.theme.breakpoints.xl_compare ? <DesktopFooter /> : <MobileFooter />}
    </Container>
  );
};
