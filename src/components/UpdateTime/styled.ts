/* eslint-disable @typescript-eslint/no-unsafe-call */
import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${theme.spacing(32, 0)};
  `}
`;

export const LastUpdate = styled.p`
  ${({ theme }) => css`
    ${theme.typography.variant.h3}
    margin: 0 auto;
    color: ${theme.colors.secondary};
  `}
`;
