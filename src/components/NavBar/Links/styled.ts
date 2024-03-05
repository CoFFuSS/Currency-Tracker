/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.colors.secondary};
  text-decoration: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    margin-right: auto;
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;
`;
