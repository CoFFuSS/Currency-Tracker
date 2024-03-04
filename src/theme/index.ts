import { createGlobalStyle } from 'styled-components';

export const black = '#030304';

export const white = '#FFF';

export const colors = {
  backG: '#030304',
  black: '#030304',
  white: '#FFF',
  gray: '#D9D9D9',
};

export const spaces = {
  i: 1,
  ii: 2,
  s: 5,
  so: 6,
  soo: 8,
  ss: 10,
  ssii: 12,
  sss: 15,
  m: 20,
  ms: 25,
  mss: 30,
  mm: 40,
  mmm: 60,
  mmmm: 80,
  x: 100,
  xm: 120,
	xmmmm: 180,
  xx: 200,
  xxx: 300,
  xxxx: 400,
  l: 500,
  z: 700,
  maxContentWidth: 1456,
};

export const fonts = {
  s: 10,
  m: 24,
  x: 40,
  xx: 60,
  xxx: 80,
};

export const endPoints = {
  maxContentWidth: 1456,
  tabletM: 1000,
  tablet: 600,
  phone: 495,
  fold: 416,
};

// add basicTheme

export const darkTheme = {
  backgroundColor: black,
  reverseColor: white,
  spaces,
  fonts,
  endPoints,
  colors,
};

export const lightTheme = {
  backgroundColor: white,
  reverseColor: black,
  spaces,
  fonts,
  endPoints,
  colors,
};

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: Poppins, sans-serif;
}

body{
    overflow-x: hidden;

    box-sizing:border-box;
    margin: 0;
    padding: 0; 

    font-family: Poppins, sans-serif;
}

h1,h2,h3,h4,h5 {
    margin: 0;
}
`;
