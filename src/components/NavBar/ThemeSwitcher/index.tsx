import { useState } from 'react';

import themeSwitcher from '@/store';

import { StyledLabel } from './styled';

export const ThemeSwitcher = (): JSX.Element => {
  const [isChecked, setIsChecked] = useState(() => themeSwitcher.themeName !== 'darkTheme');

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
