import { makeAutoObservable } from 'mobx';

import { darkTheme, lightTheme } from '@/theme';

import { DefaultTheme } from 'styled-components';

const THEME_STORAGE_KEY = 'theme';

class ThemeSwitcher {
  private _theme: DefaultTheme = darkTheme;

  constructor() {
    makeAutoObservable(this);
    this.loadThemeFromStorage();
  }
  get themeName() {
    return this._theme.themeName;
  }

  toggleTheme() {
    this._theme = this._theme.themeName === 'lightTheme' ? darkTheme : lightTheme;
    this.saveThemeToStorage();
  }

  get theme() {
    return this._theme;
  }
  private saveThemeToStorage() {
    localStorage.setItem(THEME_STORAGE_KEY, this._theme.themeName);
  }

  private loadThemeFromStorage() {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    if (savedTheme) {
      this._theme = savedTheme === 'lightTheme' ? lightTheme : darkTheme;
    }
  }
}

export default new ThemeSwitcher();
