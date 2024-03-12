import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { CurrencyResponse } from '@/interfaces/common';
import { getCurrenciesName, getCurrencyRelation } from '@/utils/mainPage';

import { Backdrop, Wrapper, StyledModal, HeaderText, CloseButton, Content, Header } from './styled';

import { CurrenciesList } from '../CurrenciesList';

interface CurrencyModalProps {
  isShown: boolean;
  hide: () => void;
  currencyList: CurrencyResponse | undefined;
  cardCurrency: string;
  givenCurrency: string;
}

export const CurrencyModal = ({
  isShown,
  hide,
  currencyList,
  cardCurrency,
  givenCurrency,
}: CurrencyModalProps) => {
  const [selectedCurrency, setSelectedCurrency] = useState<string>(givenCurrency);
  const [inputAmount, setInputAmount] = useState<number>(0);
  const [outputAmount, setOutputAmount] = useState<number>();

  useEffect(() => {
    setOutputAmount(
      () => +inputAmount * +getCurrencyRelation(cardCurrency, selectedCurrency, currencyList),
    );
  }, [inputAmount, cardCurrency, selectedCurrency, currencyList]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputAmount(+e.target.value);
  };

  const modal = (
    <>
      <Backdrop />
      <Wrapper>
        <StyledModal>
          <Header>
            <HeaderText>Currency Exchange</HeaderText>
            <CloseButton onClick={hide}>X</CloseButton>
          </Header>
          <Content>
            <CurrenciesList
              setSelectedCurrency={setSelectedCurrency}
              currenciesList={getCurrenciesName(currencyList).filter(
                (name) => name !== givenCurrency,
              )}
              defaultValue={givenCurrency}
            />
            <label htmlFor='inputAmount'>
              Input Amount
              <input
                id='inputAmount'
                placeholder='Amount'
                value={inputAmount}
                onChange={handleInputChange}
              />
            </label>
            <select>
              <option disabled>{cardCurrency}</option>
            </select>
            <label htmlFor='outputAmount'>
              Output Amount
              <input
                id='outputAmount'
                value={outputAmount}
                disabled
              />
            </label>
          </Content>
        </StyledModal>
      </Wrapper>
    </>
  );

  return isShown ? createPortal(modal, document.body) : null;
};
