/* eslint-disable @typescript-eslint/no-unsafe-return */
import { styled } from 'styled-components';

import Logo from '@/assets/images/MainPageLogo.svg';

export const Container = styled.nav`
  position: sticky;
  z-index: 2;
  top: 0;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  height: ${({ theme }) => theme.spaces.mss}px;
  margin-right: auto;
  margin-left: auto;
  padding-right: ${({ theme }) => theme.spaces.mss}px;
  padding-left: ${({ theme }) => theme.spaces.mss}px;

  background-color: ${({ theme }) => theme.backgroundColor};

  @media (min-width: ${({ theme }) => theme.endPoints.tablet}px) {
    height: ${({ theme }) => theme.spaces.x}px;
  }
`;

export const ImageContainer = styled.div`
  width: ${({ theme }) => theme.spaces.ssii}px;
  height: ${({ theme }) => theme.spaces.ssii}px;

  @media (min-width: ${({ theme }) => theme.endPoints.tablet}px) {
    width: ${({ theme }) => theme.spaces.mm}px;
    height: ${({ theme }) => theme.spaces.mm}px;
  }
`;

export const StyledLogo = styled(Logo)`
  cursor: pointer;
  width: ${({ theme }) => theme.spaces.ssii}px;
  height: ${({ theme }) => theme.spaces.ssii}px;

  @media (min-width: ${({ theme }) => theme.endPoints.tablet}px) {
    width: ${({ theme }) => theme.spaces.mm}px;
    height: ${({ theme }) => theme.spaces.mm}px;
  }
`;
