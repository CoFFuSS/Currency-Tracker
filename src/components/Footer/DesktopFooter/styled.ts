import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Copyright = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CopyrightText = styled.p`
  ${({ theme }) => css`
    ${theme.typography.variant.p2};
    color: ${theme.colors.gray5};
    ${theme.media.xl`
		${theme.typography.variant.h6}
		`}
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: ${theme.spacing(0, 120)};
  `}
`;

export const LinksContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    color: ${theme.colors.secondary};
  `}
`;

export const LinksContent = styled.div`
  display: flex;
  flex-direction: column;
`;
