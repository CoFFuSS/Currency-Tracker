import { makeAutoObservable } from 'mobx';

import { darkTheme, lightTheme } from '@/theme';

import { DefaultTheme } from 'styled-components';

class ThemeSwitcher {
  private _theme: DefaultTheme = darkTheme;

  constructor() {
    makeAutoObservable(this);
  }
  get themeName() {
    return this._theme.themeName;
  }

  toggleTheme() {
    this._theme = this._theme.themeName === 'lightTheme' ? darkTheme : lightTheme;
  }

  get theme() {
    return this._theme;
  }
}

export default new ThemeSwitcher();
