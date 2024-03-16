import styled, { css } from 'styled-components';

export const MapContainer = styled.div`
  ${({ theme }) => css`
    height: ${theme.spacing(460)};
    margin-bottom: ${theme.spacing(400)};
  `}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SearchContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin: ${theme.spacing(80)};
  `}
`;

export const SearchAdvise = styled.p`
  ${({ theme }) => css`
    ${theme.typography.variant.h2}
    margin: ${theme.spacing(24)};
    color: ${theme.colors.secondary};
  `}
`;

export const StyledInput = styled.input`
  ${({ theme }) => css`
    ${theme.typography.variant.h6}
    background-color: ${theme.colors.gray5};
    border-radius: ${theme.spacing(10)};

    &::placeholder {
      color: ${theme.colors.secondary};
    }
  `}
`;
