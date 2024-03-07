import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const StyledLink = styled(Link)`
  ${({ theme }) => css`
    ${theme.typography.variant.h9};
    color: ${theme.colors.secondary};
    text-decoration: none;
    ${theme.media.lg`${theme.typography.variant.h7}`};
  `}
`;

// margin-right: auto;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;
`;
