import styled, { css } from 'styled-components';

export const ChartContainer = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.spacing(1200)};
    max-height: ${theme.spacing(630)};
    margin: ${theme.spacing(20)} auto;
  `}
`;
