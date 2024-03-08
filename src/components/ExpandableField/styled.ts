import styled, { css } from 'styled-components';
import Icon from '@/assets/images/Down_Arrow.svg';

export const Container = styled.div`
  ${({ theme }) => css`
    cursor: pointer;

    display: flex;
    gap: ${theme.spacing(15)};
    align-items: center;
    justify-content: space-between;

    height: ${theme.spacing(54)};
    margin: ${theme.spacing(0, 40)};

    border-bottom: 1px solid ${theme.colors.gray4};
    ${theme.media.lg`
		height: ${theme.spacing(44)};
		border: none;
		`}
  `}
`;

export const Content = styled.div<{ isOpen: boolean }>`
  ${({ theme, isOpen }) => css`
    display: ${isOpen ? 'block' : 'none'};
    margin: ${theme.spacing(0, 40)};
    background-color: ${theme.colors.primary};
    ${theme.media.lg`
		display: flex;
		`}
  `}
`;

export const InnerText = styled.div`
  ${({ theme }) => css`
    ${theme.typography.variant.h10};
    color: ${({ theme }) => theme.colors.gray5};
    ${theme.media.lg`
		${theme.typography.variant.h6}
		`}
  `}
`;

export const TitleText = styled.span`
  ${({ theme }) => css`
    ${theme.typography.variant.p2}
    color: ${({ theme }) => theme.colors.secondary};
    ${theme.media.lg`
		${theme.typography.variant.h5}`}
  `}
`;

export const StyledArrow = styled(Icon)`
  ${({ theme }) => css`
    fill: ${theme.colors.secondary};

    ${theme.media.lg`
		display: none;
	`}
  `}
`;
