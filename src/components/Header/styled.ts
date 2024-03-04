/* eslint-disable @typescript-eslint/no-unsafe-return */

import styled from 'styled-components';

export const StyledHeader = styled.header`
  cursor: default;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: ${({ theme }) => theme.spaces.xx};

  background: rgb(0 0 0);
  background: linear-gradient(
    67deg,
    rgb(0 0 0 / 100%) 0%,
    rgb(25 54 34 / 100%) 60%,
    rgb(18 18 18 / 100%) 100%
  );
`;

export const StyledHeaderText = styled.h1`
  font-size: ${({ theme }) => theme.spaces.xmm};
  font-weight: 600;
  color: transparent;

  background-image: linear-gradient(90.18deg, #00ce2c 0.18%, #aedf23 49.3%, #a3dc00 99.88%);
  background-clip: text;
`;

export const StyledHeaderSubText = styled.h3`
  font-size: 12px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.gray1};
  text-shadow: ${({ theme }) => theme.shadow.header};
`;
