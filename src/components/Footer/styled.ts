import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '@/assets/images/MainPageLogo.svg';
export const Container = styled.footer`
  justify-content: center;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    display: flex;
    flex-direction: column;
  }
`;

export const StyledLink = styled(Link)`
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.colors.gray5};
  text-decoration: none;
`;

export const InfoBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: ${({ theme }) => theme.spaces.xm};
  margin-right: ${({ theme }) => theme.spaces.xmm};
  margin-left: ${({ theme }) => theme.spaces.xmm};
`;

export const LogoContainer = styled.div`
  display: flex;
  width: ${({ theme }) => theme.spaces.xm};
  height: ${({ theme }) => theme.spaces.xm};
`;

export const StyledLogo = styled(Logo)`
  display: flex;
  width: ${({ theme }) => theme.spaces.xm};
  height: ${({ theme }) => theme.spaces.xm};
`;

export const Title = styled.p`
  margin: 0 16px;

  font-size: ${({ theme }) => theme.spaces.mm};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  color: transparent;
  text-align: center;
  word-break: normal;

  background-image: linear-gradient(${({ theme }) => theme.linearGradient.headerText});
  background-clip: text;
`;
