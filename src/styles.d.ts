declare module '*.module.css' {
  interface ClassNames {
    [className: string]: string;
  }
  const classNames: ClassNames;
  export = classNames;
}
import { ITheme } from '@/types/theme_interface';
import 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}
