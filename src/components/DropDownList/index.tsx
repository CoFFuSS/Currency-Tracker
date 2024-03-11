import React from 'react';

interface DropDownListProps {
  currenciesList: string[];
  setSelectedCurrency: (currency: string) => void;
}

export const DropDownList = ({ currenciesList, setSelectedCurrency }: DropDownListProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    let ID = event.target.value;
    setSelectedCurrency(currenciesList.find((currency) => currency === ID) || '');
    console.log(ID);
  };

  return (
    <div>
      <select onChange={handleChange}>
        {currenciesList.map((currency) => (
          <option key={currency}>{currency}</option>
        ))}
      </select>
    </div>
  );
};
