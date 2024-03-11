import { useEffect, useState } from 'react';

export const useCurrencyModal = () => {
  const [isShown, setIsShown] = useState<boolean>(false);
  const toggle = () => setIsShown(!isShown);

  useEffect(() => {
    isShown ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'unset');
  }, [isShown]);

  return {
    isShown,
    toggle,
  };
};
