/* eslint-disable @typescript-eslint/no-unsafe-return */

import styled from 'styled-components';

export const ToggleSwitch = styled.div<{ checked: boolean }>`
  cursor: pointer;

  position: relative;

  width: ${({ theme }) => theme.spaces.xm};
  height: 15px;

  background-color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 20px;

  transition: background-color 0.3s;

  &::before {
    content: '';

    position: absolute;
    left: ${({ checked }) => (checked ? 'calc(100% - 48%)' : '-1px')};

    width: ${({ theme }) => theme.specialSpaces.ms};
    height: ${({ theme }) => theme.specialSpaces.ms};

    border: 1px solid ${({ theme }) => theme.colors.secondary};
    border-radius: 50%;

    transition:
      left 0.3s,
      background-color 0.3s;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    width: ${({ theme }) => theme.spaces.xl};
    height: ${({ theme }) => theme.spaces.m};

    &::before {
      width: ${({ theme }) => theme.specialSpaces.ml};
      height: ${({ theme }) => theme.specialSpaces.ml};
    }
  }
`;
