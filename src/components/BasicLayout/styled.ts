/* eslint-disable @typescript-eslint/no-unsafe-return */
import { styled } from 'styled-components';

export const PageWrapper = styled.div`
  margin: 0 auto;
  background-color: ${({ theme }) => theme.backgroundColor};
`;

export const PageContainer = styled.div`
  max-width: ${({ theme }) => theme.endPoints.maxContentWidth}px;
  margin: 0 auto;
`;
