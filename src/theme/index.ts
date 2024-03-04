import {
  THEME_BOX_SHADOWS,
  THEME_BREAKPOINTS,
  THEME_COLORS,
  THEME_FONTS_SIZE,
  THEME_FONT_FAMILIES,
  THEME_SPACES,
} from './constants';

const BasicTheme = {
  colors: THEME_COLORS,
  breakpoints: THEME_BREAKPOINTS,
  shadow: THEME_BOX_SHADOWS,
  spaces: THEME_SPACES,
  fontFamilies: THEME_FONT_FAMILIES,
  fontSize: THEME_FONTS_SIZE,
};

export const lightTheme = {
  themeName: 'lightTheme',
  ...BasicTheme,
  colors: {
    ...BasicTheme.colors,
    primary: '#FFF',
    secondary: '#000000',
  },
};

export const darkTheme = {
  themeName: 'darkTheme',
  ...BasicTheme,
  colors: {
    ...BasicTheme.colors,
    primary: '#000000',
    secondary: '#FFF',
  },
};
