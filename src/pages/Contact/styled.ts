import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin: ${theme.spacing(120)};
  `}
`;

export const GeneralText = styled.p`
  ${({ theme }) => css`
    ${theme.typography.variant.h4}
    color: ${theme.colors.secondary};
  `}
`;

export const SubText = styled.p`
  ${({ theme }) => css`
    ${theme.typography.variant.h6}
    margin: 0;
    color: ${theme.colors.secondary};
  `}
`;

export const ContactBlock = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;
