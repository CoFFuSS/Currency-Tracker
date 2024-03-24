import { ChangeEvent } from 'react';

import { Container, StyledList, StyledOption } from './styled';

interface CurrenciesListProps {
  currenciesList: string[];
  setSelectedCurrency: (currency: string) => void;
  defaultValue: string;
  disable: boolean;
}

export const CurrenciesList = ({
  currenciesList,
  setSelectedCurrency,
  defaultValue,
  disable = true,
}: CurrenciesListProps) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const inputValue = event.target.value;
    setSelectedCurrency(currenciesList.find((currency) => currency === inputValue) ?? '');
  };

  return (
    <Container>
      <StyledList
        onChange={handleChange}
        disabled={disable}
      >
        <StyledOption key={defaultValue}>{defaultValue}</StyledOption>
        {currenciesList.map((currency) => (
          <StyledOption key={currency}>{currency}</StyledOption>
        ))}
      </StyledList>
    </Container>
  );
};
