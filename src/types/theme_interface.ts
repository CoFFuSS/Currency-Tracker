export interface ITheme {
  themeName: string;
  colors: {
    primary: string;
    secondary: string;
    gray1: string;
    gray2: string;
    gray3: string;
    blue: string;
  };
  breakpoints: {
    xs: string;
    sm: string;
    lg: string;
    xl: string;
  };
  shadow: {
    header: string;
  };
  spaces: {
    xss: string;
    xs: string;
    s: string;
    mss: string;
    ms: string;
    m: string;
    xmm: string;
    xl: string;
    x: string;
    xx: string;
  };
  fontFamilies: {
    primary: string;
  };
  fontSize: {
    xs: string;
    s: string;
    ms: string;
    m: string;
    xl: string;
  };
}
