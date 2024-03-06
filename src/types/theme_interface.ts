export interface ITheme {
  themeName: string;
  colors: {
    primary: string;
    secondary: string;
    gray1: string;
    gray2: string;
    gray3: string;
    gray4: string;
    blue: string;
    black: string;
    white: string;
  };
  breakpoints: {
    xs: string;
    sm: string;
    lg: string;
    xl: string;
    mw: string;
  };
  shadow: {
    header: string;
    subheader: string;
  };
  spaces: {
    xss: string;
    xs: string;
    s: string;
    mss: string;
    ms: string;
    m: string;
    xm: string;
    xmm: string;
    xl: string;
    xls: string;
    l: string;
    x: string;
    xx: string;
    xxl: string;
    em: string;
    e: string;
    h: string;
  };
  fontFamilies: {
    primary: string;
    subHeader: string;
  };
  fontSize: {
    xs: string;
    ss: string;
    s: string;
    mss: string;
    ms: string;
    m: string;
    xl: string;
  };
  linearGradient: {
    header: string;
    headerText: string;
  };
  fontWeight: {
    light: string;
    regular: string;
    medium: string;
    semibold: string;
    bold: string;
  };
}
