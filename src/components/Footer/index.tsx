import useWindowDimensions from '@/utils/useWindowDimensions';
import { MobileFooter } from './MobileFooter';
import { Container } from './styled';
import { DesktopFooter } from './DesktopFooter';

export const Footer = () => {
  const { width } = useWindowDimensions();
  return <Container>{width > 1200 ? <DesktopFooter /> : <MobileFooter />}</Container>;
};
