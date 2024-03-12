/* eslint-disable @typescript-eslint/no-unsafe-call */
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  z-index: 700;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: inherit;

  outline: 0;
`;

export const Backdrop = styled.div`
  position: fixed;
  z-index: 500;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background: rgb(0 0 0 / 30%);
`;

export const StyledModal = styled.div`
  ${({ theme }) => css`
    position: relative;
    z-index: 100;

    margin: auto;

    background: white;
    border-radius: ${theme.spacing(8)};
  `}
`;

export const Header = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    padding: ${theme.spacing(8)};
    border-radius: ${theme.spacing(8, 8, 0, 0)};
  `}
`;

export const HeaderText = styled.div`
  ${({ theme }) => css`
    align-self: center;
    color: ${theme.colors.primary};
  `}
`;

export const CloseButton = styled.button`
  ${({ theme }) => css`
    margin-left: ${theme.spacing(9)};

    font-size: ${theme.spacing(12)};

    background: none;
    border: none;
    border-radius: ${theme.spacing(3)};

    :hover {
      cursor: pointer;
    }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    overflow-x: hidden;
    overflow-y: auto;
    max-height: 30rem;
    padding: ${theme.spacing(10)};
  `}
`;
