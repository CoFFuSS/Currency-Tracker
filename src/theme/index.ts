import { ITheme } from '@/types/theme_interface';
import {
  THEME_BOX_SHADOWS,
  THEME_BREAKPOINTS,
  THEME_COLORS,
  THEME_FONTS_SIZE,
  THEME_FONT_FAMILIES,
  THEME_FONT_WEIGHT,
  THEME_LINEAR_GRADIENT,
  THEME_SPACES,
  THEME_SPACIAL_SPACES,
} from './constants';

const BasicTheme: ITheme = {
  themeName: 'basicTheme',
  colors: THEME_COLORS,
  breakpoints: THEME_BREAKPOINTS,
  shadow: THEME_BOX_SHADOWS,
  spaces: THEME_SPACES,
  fontFamilies: THEME_FONT_FAMILIES,
  fontSize: THEME_FONTS_SIZE,
  linearGradient: THEME_LINEAR_GRADIENT,
  fontWeight: THEME_FONT_WEIGHT,
  specialSpaces: THEME_SPACIAL_SPACES,
};

export const lightTheme = {
  ...BasicTheme,
  themeName: 'lightTheme',
  colors: {
    ...BasicTheme.colors,
    primary: '#FFF',
    secondary: '#000000',
    gray5: '#3d3d3d',
  },
};

export const darkTheme = {
  ...BasicTheme,
  themeName: 'darkTheme',
  colors: {
    ...BasicTheme.colors,
    primary: '#000000',
    secondary: '#FFF',
  },
};
