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
  `}
`;

export const Content = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  ${({ theme }) => css`
    margin: ${theme.spacing(0, 40)};
    line-height: ${theme.spacing(24)};
    background-color: ${theme.colors.primary};
  `}
`;

export const InnerText = styled.div`
  ${({ theme }) => css`
    ${theme.typography.variant.h10};
    color: ${({ theme }) => theme.colors.gray5};
  `}
`;

export const TitleText = styled.span`
  ${({ theme }) => css`
    ${theme.typography.variant.p2}
    color: ${({ theme }) => theme.colors.secondary};
  `}
`;

export const StyledArrow = styled(Icon)`
  ${({ theme }) => css`
    fill: ${theme.colors.secondary};
  `}
`;
