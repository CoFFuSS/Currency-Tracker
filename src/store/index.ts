// eslint-disable-next-line import/no-extraneous-dependencies
import { makeAutoObservable } from 'mobx';

import { darkTheme, lightTheme } from '@/theme';
import { STORAGE_KEYS } from '@/constants';
import { Theme } from '@/types/theme';

class ThemeSwitcher {
  private _theme: Theme = darkTheme;

  private _themeMode = 'dark';

  constructor() {
    makeAutoObservable(this);
    this.loadThemeFromStorage();
  }

  get themeName() {
    return this._themeMode;
  }

  toggleTheme() {
    this._theme = this._themeMode === 'light' ? darkTheme : lightTheme;
    this._themeMode = this._themeMode === 'light' ? 'dark' : 'light';
    this.saveThemeToStorage();
  }

  get theme(): Theme {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this._theme;
  }

  private saveThemeToStorage() {
    localStorage.setItem(STORAGE_KEYS.theme, this._themeMode);
  }

  private loadThemeFromStorage() {
    const savedTheme = localStorage.getItem(STORAGE_KEYS.theme);

    if (savedTheme) {
      this._theme = savedTheme === 'light' ? lightTheme : darkTheme;
    }
  }
}

export default new ThemeSwitcher();
