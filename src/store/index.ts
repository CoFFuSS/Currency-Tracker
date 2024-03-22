// eslint-disable-next-line import/no-extraneous-dependencies
import { makeAutoObservable } from 'mobx';

import { darkTheme, lightTheme } from '@/theme';
import { STORAGE_KEYS } from '@/constants';
import { Theme } from '@/types/theme';
import { CurrencyResponse } from '@/types/common';

class ThemeSwitcher {
  private _theme: Theme = darkTheme;

  private _themeMode = 'dark';

  private _currencyResponse: CurrencyResponse = { meta: { last_updated_at: '' }, data: {} };

  constructor() {
    makeAutoObservable(this);
    this.loadThemeFromStorage();
  }

  get themeName() {
    return this._themeMode;
  }

  get theme(): Theme {
    return this._theme;
  }

  get currencyResponse(): CurrencyResponse {
    return this._currencyResponse;
  }

  setCurrencyResponse(value: CurrencyResponse) {
    this._currencyResponse = value;
  }

  toggleTheme() {
    this._theme = this._themeMode === 'light' ? darkTheme : lightTheme;
    this._themeMode = this._themeMode === 'light' ? 'dark' : 'light';
    this.saveThemeToStorage();
  }

  private saveThemeToStorage() {
    localStorage.setItem(STORAGE_KEYS.theme, this._themeMode);
  }

  private loadThemeFromStorage() {
    const savedTheme = localStorage.getItem(STORAGE_KEYS.theme);

    if (savedTheme) {
      this._theme = savedTheme === 'light' ? lightTheme : darkTheme;
      this._themeMode = savedTheme === 'light' ? 'light' : 'dark';
    }
  }
}

export default new ThemeSwitcher();
