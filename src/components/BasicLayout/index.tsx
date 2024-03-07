import { Outlet } from 'react-router-dom';

import { PageContainer, PageWrapper } from './styled';

import { Header } from '@/components/Header';
import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';
import { UpdateTime } from '../UpdateTime';

export const BasicLayout = (): JSX.Element => (
  <PageWrapper>
    <PageContainer>
      <NavBar />
      <Header />
      <UpdateTime />
      <Outlet />
      <Footer />
    </PageContainer>
  </PageWrapper>
);
