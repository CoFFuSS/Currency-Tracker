import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import { observer } from 'mobx-react-lite';

import themeSwitcher from '@/store';
import { BasicLayout } from '@/components/BasicLayout';
import ROUTES from '@/constants/navRoutes';

import { GlobalStyle } from './styled';

export const App = observer(() => (
  <ThemeProvider theme={themeSwitcher.theme}>
    <GlobalStyle />
    <Routes>
      <Route
        path='/'
        element={<BasicLayout />}
      >
        {ROUTES.map(({ path, element }) => (
          <Route
            path={path}
            element={element}
            key={path}
          />
        ))}
      </Route>
    </Routes>
  </ThemeProvider>
));
