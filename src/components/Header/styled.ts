/* eslint-disable @typescript-eslint/no-unsafe-return */

import styled from 'styled-components';

import Logo from '@/assets/images/HeaderLogo.svg';

export const StyledHeader = styled.header`
  cursor: default;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  height: ${({ theme }) => theme.spaces.xx};

  background: ${({ theme }) => theme.colors.black};
  background: linear-gradient(${({ theme }) => theme.linearGradient.header});

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    height: ${({ theme }) => theme.spaces.e};
  }
`;

export const StyledHeaderText = styled.h1`
  font-size: ${({ theme }) => theme.spaces.xmm};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  color: transparent;
  text-align: center;
  word-break: normal;

  background-image: linear-gradient(${({ theme }) => theme.linearGradient.headerText});
  background-clip: text;
  filter: drop-shadow(${({ theme }) => theme.shadow.header});

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    font-size: ${({ theme }) => theme.fontSize.xl};
    text-align: right;
  }
`;

export const StyledHeaderSubText = styled.p`
  margin-top: ${({ theme }) => theme.spaces.m};

  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  line-height: ${({ theme }) => theme.spaces.m};
  color: ${({ theme }) => theme.colors.gray1};
  text-align: center;
  text-shadow: ${({ theme }) => theme.shadow.subheader};
  word-break: normal;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    width: 450px;

    font-size: ${({ theme }) => theme.fontSize.mss};
    line-height: ${({ theme }) => theme.spaces.xl};
    text-align: right;
    text-align-last: center;
  }
`;

export const StyledLogoContainer = styled.div`
  display: none;
  width: ${({ theme }) => theme.spaces.mss}px;
  height: ${({ theme }) => theme.spaces.mss}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    display: flex;
    width: ${({ theme }) => theme.spaces.em};
    height: ${({ theme }) => theme.spaces.em};
  }
`;

export const StyledHeaderLogo = styled(Logo)`
  display: none;
  width: ${({ theme }) => theme.spaces.mss};
  height: ${({ theme }) => theme.spaces.mss};

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    display: flex;
    width: ${({ theme }) => theme.spaces.em};
    height: ${({ theme }) => theme.spaces.em};
  }
`;

export const StyledHeaderTextContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    align-items: end;
    margin-right: 24px;
  }
`;

export const StyledHeaderContainer = styled.div`
  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    display: flex;
    flex-direction: row;
  }
`;
