import { BankCardPage } from '@/pages/BankCard';
import { ContactPage } from '@/pages/Contact';
import { HomePage } from '@/pages/Home';
import { TimelinePage } from '@/pages/Timeline';

const ROUTES = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: 'contact',
    element: <ContactPage />,
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
