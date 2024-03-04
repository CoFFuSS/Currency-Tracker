export const getStorageTheme = (): 'black' | 'light' =>
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  JSON.parse(localStorage.getItem('theme')!);

export const setStorageTheme = (theme: string): void =>
  localStorage.setItem('theme', theme);
