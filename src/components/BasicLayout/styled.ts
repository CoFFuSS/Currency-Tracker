import styled from 'styled-components';

export const PageWrapper = styled.div`
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const PageContainer = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.xl}px;
  margin: 0 auto;
`;
