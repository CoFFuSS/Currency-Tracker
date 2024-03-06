import { useState } from 'react';
import propTypes from 'prop-types';

import { ToggleSwitch } from './styled';

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
    <>
      <ToggleSwitch
        checked={isChecked}
        onClick={handleToggle}
      />
    </>
  );
};

ThemeSwitcher.propType = {
  isChecked: propTypes.bool,
};
