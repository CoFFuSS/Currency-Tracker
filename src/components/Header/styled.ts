import { styled } from 'styled-components';

/* eslint-disable @typescript-eslint/no-unsafe-return */

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: ${({ theme }) => theme.spaces.xmmmm}px;

  background: rgb(0 0 0);
  background: linear-gradient(
    67deg,
    rgb(0 0 0 / 100%) 0%,
    rgb(25 54 34 / 100%) 60%,
    rgb(18 18 18 / 100%) 100%
  );
`;

export const StyledHeaderText = styled.h1`
  font-size: 38px;
  color: rgb(0 206 44);
  color: linear-gradient(
    180deg,
    rgb(0 206 44 / 100%) 0%,
    rgb(174 223 35 / 100%) 3%,
    rgb(163 220 0 / 100%) 72%
  );
`;

export const StyledHeaderSubText = styled.h3`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray};
`;
