import React from 'react';
import { Container, StyledList, StyledOption } from './styled';

interface DropDownListProps {
  currenciesList: string[];
  setSelectedCurrency: (currency: string) => void;
  defaultValue: string;
}

export const DropDownList = ({
  currenciesList,
  setSelectedCurrency,
  defaultValue = 'Selected Currency',
}: DropDownListProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    let ID = event.target.value;
    setSelectedCurrency(currenciesList.find((currency) => currency === ID) || '');
  };

  return (
    <Container>
      <StyledList onChange={handleChange}>
        <StyledOption key={defaultValue}>{defaultValue}</StyledOption>
        {currenciesList.map((currency) => (
          <StyledOption key={currency}>{currency}</StyledOption>
        ))}
      </StyledList>
    </Container>
  );
};
