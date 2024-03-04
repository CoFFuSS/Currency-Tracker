/* eslint-disable @typescript-eslint/no-unsafe-return */

import Logo from '@/assets/images/MainPageLogo.svg';
import styled from 'styled-components';

export const Container = styled.nav`
  position: sticky;
  z-index: 2;
  top: 0;

  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;

  height: ${({ theme }) => theme.spaces.xm};
  margin-right: auto;
  margin-left: auto;
  padding-right: ${({ theme }) => theme.spaces.xm};
  padding-left: ${({ theme }) => theme.spaces.xm};

  background-color: ${({ theme }) => theme.colors.primary};

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    height: ${({ theme }) => theme.spaces.xl};
  }
`;

export const ImageContainer = styled.div`
  width: ${({ theme }) => theme.spaces.mss}px;
  height: ${({ theme }) => theme.spaces.mss}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    width: ${({ theme }) => theme.spaces.xmm};
    height: ${({ theme }) => theme.spaces.xmm};
  }
`;

export const StyledLogo = styled(Logo)`
  cursor: pointer;
  width: ${({ theme }) => theme.spaces.mss};
  height: ${({ theme }) => theme.spaces.mss};

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    width: ${({ theme }) => theme.spaces.xmm};
    height: ${({ theme }) => theme.spaces.xmm};
  }
`;
