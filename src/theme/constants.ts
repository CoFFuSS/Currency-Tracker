import { pxToRem } from './utils';

export const THEME_COLORS = {
  primary: '#000000',
  secondary: '#000000',
  gray1: '#D9D9D9',
  gray2: '#898989',
  gray3: '#202025',
  gray4: '#607D94',
  gray5: '#898989',
  blue: '#A7B2C3',
  black: '#000000',
  white: '#FFFFFF',
};

export const THEME_BOX_SHADOWS = {
  header: '0px 0px 3px #000000',
  subheader: '0px 3px 3px #00000080',
};

export const THEME_FONT_FAMILIES = {
  primary: 'Poppins, sans-serif',
  secondary: 'Poppins, system-ui',
};

export const THEME_LINEAR_GRADIENT = {
  header: '67deg, rgb(0 0 0 / 100%) 0%, rgb(25 54 34 / 100%) 60%, rgb(18 18 18 / 100%) 100%',
  headerText: '90.18deg, #00ce2c 0.18%, #aedf23 49.3%, #a3dc00 99.88%',
};

export const THEME_FONT_WEIGHT = {
  light: '100',
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
};

export const THEME_TYPOGRAPHY_VARIANTS = {
  h1: {
    fontFamily: THEME_FONT_FAMILIES.primary,
    fontSize: pxToRem(76),
    fontWeight: 600,
    lineHeight: 114 / 76,
  },
  h2: {
    fontFamily: THEME_FONT_FAMILIES.primary,
    fontSize: pxToRem(39),
    fontWeight: 600,
    lineHeight: 58 / 39,
  },
  h3: {
    fontFamily: THEME_FONT_FAMILIES.primary,
    fontSize: pxToRem(35),
    fontWeight: 400,
    lineHeight: 50 / 35,
  },
  h4: {
    fontFamily: THEME_FONT_FAMILIES.primary,
    fontSize: pxToRem(32),
    fontWeight: 300,
    lineHeight: 41 / 32,
  },
  h5: {
    fontFamily: THEME_FONT_FAMILIES.primary,
    fontSize: pxToRem(28),
    fontWeight: 400,
    lineHeight: 42 / 28,
  },
  h6: {
    fontFamily: THEME_FONT_FAMILIES.primary,
    fontSize: pxToRem(24),
    fontWeight: 400,
    lineHeight: 36 / 24,
  },
  h7: {
    fontFamily: THEME_FONT_FAMILIES.primary,
    fontSize: pxToRem(20),
    fontWeight: 300,
    lineHeight: 41 / 20,
  },
  h8: {
    fontFamily: THEME_FONT_FAMILIES.primary,
    fontSize: pxToRem(13),
    fontWeight: 400,
    lineHeight: 18 / 13,
  },
  h9: {
    fontFamily: THEME_FONT_FAMILIES.primary,
    fontSize: pxToRem(10),
    fontWeight: 300,
    lineHeight: 12 / 10,
  },
  h10: {
    fontFamily: THEME_FONT_FAMILIES.primary,
    fontSize: pxToRem(12),
    fontWeight: 300,
    lineHeight: 16 / 12,
  },
  p1: {
    fontFamily: THEME_FONT_FAMILIES.secondary,
    fontSize: pxToRem(25),
    fontWeight: 300,
    lineHeight: 46 / 25,
  },
  p2: {
    fontFamily: THEME_FONT_FAMILIES.primary,
    fontSize: pxToRem(16),
    fontWeight: 400,
    lineHeight: 24 / 16,
  },
  p3: {
    fontFamily: THEME_FONT_FAMILIES.secondary,
    fontSize: pxToRem(12),
    fontWeight: 300,
    lineHeight: 22 / 12,
  },
  p4: {
    fontFamily: THEME_FONT_FAMILIES.primary,
    fontSize: pxToRem(26),
    fontWeight: 600,
    lineHeight: 42 / 26,
  },
};
