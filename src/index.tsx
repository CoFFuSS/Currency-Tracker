import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ErrorBoundary } from 'react-error-boundary';

import { App } from '@/components/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <ErrorBoundary fallback={<h1>Opps, something went wrong!</h1>}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ErrorBoundary>,
);
