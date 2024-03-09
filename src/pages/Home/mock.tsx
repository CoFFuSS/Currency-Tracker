import Icon1 from '@/assets/images/BovespaIcon.svg';
import Icon2 from '@/assets/images/Bitcoin Icon.svg';
import Icon3 from '@/assets/images/Australian Dollar Icon.svg';
import Icon4 from '@/assets/images/Canadian Dollar Icon.svg';
import Icon5 from '@/assets/images/Dollar Icon.svg';

export const testMock = {
  icon1: <Icon1 />,
};

export const options = {
  STOCKS_SECTION: [
    {
      icon: <Icon1 />,
      currency: 'USD',
      price: '0.15%',
    },
    {
      icon: <Icon2 />,
      currency: 'BTC',
      price: '3.33%',
    },
  ],
  QUOTES_SECTION: [
    {
      icon: <Icon3 />,
      currency: 'AUD',
      price: '5',
    },
    {
      icon: <Icon4 />,
      currency: 'CAD',
      price: '6',
    },
    {
      icon: <Icon5 />,
      currency: 'Dollar',
      price: '1',
    },

  ],
};
