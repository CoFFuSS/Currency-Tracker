import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: ${theme.spacing(20, 20, 40, 20)};
    ${theme.media.lg`
			margin: ${theme.spacing(40, 40, 100, 40)}
		`}
  `}
`;

export const TextField = styled.p`
  ${({ theme }) => css`
    ${theme.typography.variant.h1}
    color: ${theme.colors.secondary};
  `}
`;
