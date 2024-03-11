import BitcoinSVG from '@/assets/images/Bitcoin Icon.svg';
import AuDollarSVG from '@/assets/images/Australian Dollar Icon.svg';
import CaDollarSVG from '@/assets/images/Canadian Dollar Icon.svg';
import DollarSVG from '@/assets/images/Dollar Icon.svg';
import YenSVG from '@/assets/images/Yen Icon.svg';
import EuroSVG from '@/assets/images/Euro Icon.svg';
import WonSVG from '@/assets/images/Won Icon.svg';
import LiraSVG from '@/assets/images/Libra Icon.svg';
import PesoSVG from '@/assets/images/Peso Argentino Icon.svg';

export const CurrencyIcons = {
  STOCKS_SECTION: [],
  QUOTES_SECTION: [
    {
      icon: <BitcoinSVG />,
      currency: 'BTC',
    },
    {
      icon: <AuDollarSVG />,
      currency: 'AUD',
    },
    {
      icon: <CaDollarSVG />,
      currency: 'CAD',
    },
    {
      icon: <DollarSVG />,
      currency: 'USD',
    },
    {
      icon: <YenSVG />,
      currency: 'JPY',
    },
    {
      icon: <EuroSVG />,
      currency: 'EUR',
    },
    {
      icon: <WonSVG />,
      currency: 'CNY',
    },
    {
      icon: <LiraSVG />,
      currency: 'TRY',
    },
    {
      icon: <PesoSVG />,
      currency: 'ARS',
    },
  ],
};
