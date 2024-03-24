import { useState } from 'react';

import themeSwitcher from '@/store';

import { StyledLabel } from './styled';

export const ThemeSwitcher = () => {
  const [isChecked, setIsChecked] = useState(() => themeSwitcher.themeName !== 'dark');

  const handleToggle = () => {
    themeSwitcher.toggleTheme();
    setIsChecked((prev) => !prev);
  };

  return (
    <StyledLabel checked={isChecked}>
      <input
        onChange={handleToggle}
        id='checkbox'
        type='checkbox'
      />
    </StyledLabel>
  );
};
