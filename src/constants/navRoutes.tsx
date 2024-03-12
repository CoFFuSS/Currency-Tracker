import { BankCardPage } from '@/pages/BankCard';
import { ContatoPage } from '@/pages/Contato';
import { HomePage } from '@/pages/Home';
import { TimelinePage } from '@/pages/Timeline';

const ROUTES = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: 'contact',
    element: <ContatoPage />,
  },
  {
    path: 'bankcard',
    element: <BankCardPage />,
  },
  {
    path: 'timeline',
    element: <TimelinePage />,
  },
];

export default ROUTES;
