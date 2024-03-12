import { Outlet } from 'react-router-dom';

import { Header } from '@/components/Header';
import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';

import { PageContainer, PageWrapper } from './styled';

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
