/* eslint-disable @typescript-eslint/no-unsafe-call */
import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;

    margin: ${theme.spacing(32, 26, 0, 26)};
    padding-bottom: ${theme.spacing(150)};
  `}
`;

export const StyledSection = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    row-gap: ${theme.spacing(20)};
    justify-content: center;

    margin-bottom: ${theme.spacing(32)};
  `}
`;

export const SectionName = styled.span`
  ${({ theme }) => css`
    ${theme.typography.variant.h10};
    height: ${theme.spacing(30)};
    color: ${theme.colors.secondary};
    border-bottom: ${theme.spacing(1)} solid ${theme.colors.mediumDark};
  `}
`;

export const Card = styled.div`
  ${({ theme }) => css`
    cursor: pointer;

    display: flex;
    align-items: center;

    height: ${theme.spacing(62)};

    background-color: ${theme.colors.mediumDark};
    border-radius: ${theme.spacing(3)};
  `}
`;

export const SvgIcon = styled.div`
  ${({ theme }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    width: ${theme.spacing(30)};
    height: ${theme.spacing(30)};
    margin: ${theme.spacing(0, 12)};

    & svg {
      width: ${theme.spacing(30)};
      height: ${theme.spacing(30)};
    }
  `}
`;

export const CardItem = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-content: space-between;

    width: ${theme.spacing(105)};
    height: ${theme.spacing(35)};
  `}
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardCurrency = styled.p`
  ${({ theme }) => css`
    margin: 0;
    ${theme.typography.variant.h8};
    color: ${theme.colors.gray1};
  `}
`;

export const CardPrice = styled.p`
  ${({ theme }) => css`
    margin: 0;
    ${theme.typography.variant.h10};
    color: ${theme.colors.blue};
  `}
`;