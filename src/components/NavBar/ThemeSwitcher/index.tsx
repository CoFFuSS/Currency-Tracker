import { useState } from 'react';

import { StyledLabel } from './styled';

import themeSwitcher from '@/store';

export const ThemeSwitcher = (): JSX.Element => {
  const [isChecked, setIsChecked] = useState(() =>
    themeSwitcher.themeName === 'darkTheme' ? false : true,
  );
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
