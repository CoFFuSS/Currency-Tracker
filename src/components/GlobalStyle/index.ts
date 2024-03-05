import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
/* @font-face {
    font-family: Poppins, sans-serif;
} */

body{
    overflow-x: hidden;
    box-sizing:border-box;
    margin: 0;
    padding: 0; 

}

h1,h2,h3,h4,h5 {
    margin: 0;
}

:root {
	align-content: center;

	max-width: 1546px;
	margin: 0 auto;

	font-family: Poppins, sans-serif;

	background-color: ${({ theme }) => theme.colors.primary};
}
`;
