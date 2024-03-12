/* eslint-disable @typescript-eslint/no-unsafe-call */
import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: end;
    margin: ${theme.spacing(20, 0)};
  `}
`;

export const StyledList = styled.select`
  ${({ theme }) => css`
    width: ${theme.spacing(100)};
    ${theme.typography.variant.h5}
    text-align: center;
    text-align-last: center;
    border-radius: ${theme.spacing(4)};
  `}
`;

export const StyledOption = styled.option`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    ${theme.typography.variant.h5}
    text-align: center;
    text-align-last: center;

    &:hover {
      background-color: ${theme.colors.gray5};
    }
  `}
`;
