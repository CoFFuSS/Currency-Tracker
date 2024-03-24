import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from '@/components/App';

async function enableMocking() {
  if (process.env.NODE_ENV === 'development') {
    const { worker } = await import('./mocks/browser');

    return worker.start();
  }

  return null;
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

enableMocking().then(() => {
  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );
});
