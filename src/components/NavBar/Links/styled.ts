/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const StyledLink = styled(Link)`
  margin-right: ${({ theme }) => theme.fonts.m}px;
  font-size: ${({ theme }) => theme.fonts.s}px;
  color: ${({ theme }) => theme.reverseColor};
  text-decoration: none;

  @media (min-width: ${({ theme }) => theme.endPoints.tablet}px) {
    margin-right: auto;
    font-size: ${({ theme }) => theme.fonts.x}px;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
