// eslint-disable-next-line import/no-extraneous-dependencies
import { makeAutoObservable } from 'mobx';

import { darkTheme, lightTheme } from '@/theme';

class ThemeSwitcher {
  private theme = darkTheme;

  constructor() {
    makeAutoObservable(this);
  }

  get isLightTheme() {
    return this.theme.backgroundColor === '#FFF';
  }

  toggleTheme() {
    this.theme = this.isLightTheme ? darkTheme : lightTheme;
  }
}

export default new ThemeSwitcher();
