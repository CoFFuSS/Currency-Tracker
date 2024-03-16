import styled, { css } from 'styled-components';

export const MapContainer = styled.div`
  ${({ theme }) => css`
    height: ${theme.spacing(460)};
  `}
`;
