import styled, { css, keyframes } from 'styled-components';

import LoadingImage from '@/assets/images/loadingImage.svg';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const MapContainer = styled.div`
  ${({ theme }) => css`
    height: ${theme.spacing(230)};
    margin-bottom: ${theme.spacing(400)};

    .mapboxgl-ctrl-zoom-in,
    .mapboxgl-ctrl-zoom-out,
    .mapboxgl-ctrl-compass {
      width: ${theme.spacing(50)};
      max-width: ${theme.spacing(100)};
      height: ${theme.spacing(25)};

      color: ${theme.colors.primary};

      background-color: ${theme.colors.secondary};
      border-radius: ${theme.spacing(20)};

      transition:
        background-color 0.3s ease,
        transform 0.3s ease;
      animation: ${fadeIn} 0.5s ease;

      &:hover {
        transform: scale(1.05);
        background-color: ${theme.colors.gray5};
      }

      .mapboxgl-ctrl-icon {
        display: list-item;
        color: ${theme.colors.secondary};
        ${theme.typography.variant.h6};
      }

      ${theme.media.lg`
			  width: ${theme.spacing(75)};
      	height: ${theme.spacing(45)};
			`};
    }

    ${theme.media.lg`
    	height: ${theme.spacing(460)};
		`}
  `}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SearchContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin: ${theme.spacing(80)};
  `}
`;

export const SearchAdvise = styled.p`
  ${({ theme }) => css`
    ${theme.typography.variant.h2}
    margin: ${theme.spacing(24)};
    color: ${theme.colors.secondary};
  `}
`;

export const StyledInput = styled.input`
  ${({ theme }) => css`
    width: ${theme.spacing(200)};
    height: ${theme.spacing(30)};

    ${theme.media.lg`    
			width: ${theme.spacing(400)};
    	height: ${theme.spacing(25)};
`}
    ${theme.typography.variant.h6}
    background-color: ${theme.colors.gray5};
    border: ${theme.spacing(20)} solid ${theme.colors.gray5};
    border-radius: ${theme.spacing(10)};

    &::placeholder {
      color: ${theme.colors.primary};
    }

    &:focus {
      color: ${theme.colors.primary};
    }
  `}
`;

export const StyledLoadingImage = styled(LoadingImage)`
  ${({ theme }) => css`
    display: flex;
    align-self: center;
    justify-content: center;

    width: ${theme.spacing(216)};
    height: ${theme.spacing(216)};
    ${theme.media.lg`
		  width: ${theme.spacing(460)};
    	height: ${theme.spacing(460)};
		`}
  `}
`;
