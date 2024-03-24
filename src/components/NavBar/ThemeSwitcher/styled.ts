/* eslint-disable @typescript-eslint/no-unsafe-call */
import styled, { css } from 'styled-components';

export const ToggleSwitch = styled.div<{ checked: boolean }>`
  left: ${({ checked }) => (checked ? 'calc(100% - 48%)' : '-1px')};
  ${({ theme }) => css`
    cursor: pointer;

    position: relative;

    width: ${theme.spacing(30)};
    height: ${theme.spacing(15)};

    background-color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.secondary};
    border-radius: ${theme.spacing(20)};

    transition: background-color 0.3s;

    &::before {
      content: '';

      position: absolute;

      width: ${theme.spacing(16)};
      height: ${theme.spacing(16)};

      border: 1px solid ${theme.colors.secondary};
      border-radius: 50%;

      transition:
        left 0.3s,
        background-color 0.3s;
    }
    ${theme.media.lg`
		width: ${theme.spacing(48)}; 
		height: ${theme.spacing(24)};
		&::before {
			width: ${theme.spacing(22)};
      height: ${theme.spacing(22)};
		}`}
  `}
`;

export const StyledLabel = styled.label<{ checked: boolean }>`
  ${({ theme, checked }) => css`
    cursor: pointer;

    position: relative;

    display: block;

    width: ${theme.spacing(30)};
    height: ${theme.spacing(15)};

    text-indent: -9999px;

    background: ${theme.colors.primary};
    border: ${theme.spacing(1)} solid ${theme.colors.secondary};
    border-radius: ${theme.spacing(100)};

    &::after {
      content: '';

      position: absolute;
      left: ${checked ? 'calc(100% - 48%)' : '-0.5px'};

      width: ${theme.spacing(13)};
      height: ${theme.spacing(13)};

      background: ${theme.colors.secondary};
      border: 1px solid ${theme.colors.secondary};
      border-radius: ${theme.spacing(90)};

      transition: 0.3s;
      ${theme.media.lg`
			width: ${theme.spacing(22)};
      height: ${theme.spacing(23)};`}
    }
    ${theme.media.lg`
		width: ${theme.spacing(48)}; 
		height: ${theme.spacing(24)};

		`}
  `}
`;
