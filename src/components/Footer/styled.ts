import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Logo from '@/assets/images/MainPageLogo.svg';
export const Container = styled.footer`
  justify-content: center;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    display: flex;
    flex-direction: column;
  }
`;

export const StyledLink = styled(Link)`
  ${({ theme }) => css`
    ${theme.typography.variant.h10}
    color: ${theme.colors.gray5};
    text-decoration: none;
  `}
`;

export const InfoBlock = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    height: ${theme.spacing(30)};
    margin: ${theme.spacing(0, 40)};
  `}
`;

export const LogoContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: ${theme.spacing(30)};
    height: ${theme.spacing(30)};
  `}
`;

export const StyledLogo = styled(Logo)`
  ${({ theme }) => css`
    display: flex;
    width: ${theme.spacing(30)};
    height: ${theme.spacing(30)};
  `}
`;

export const Title = styled.p`
  ${({ theme }) => css`
    margin: ${({ theme }) => theme.spacing(0, 16)};

    ${theme.typography.variant.h7}
    color: transparent;
    text-align: center;
    word-break: normal;

    background-image: linear-gradient(${theme.linearGradient.headerText});
    background-clip: text;
  `}
`;
