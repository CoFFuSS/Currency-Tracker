import styled, { css } from 'styled-components';

export const ChartContainer = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.primary};
  `}
`;
