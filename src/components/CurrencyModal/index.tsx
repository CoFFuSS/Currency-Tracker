import { Fragment, useEffect, useState } from 'react';
import { Backdrop, Wrapper, StyledModal, HeaderText, CloseButton, Content, Header } from './styled';
import { createPortal } from 'react-dom';
import { DropDownList } from '../DropDownList';
import { CurrencyResponse } from '@/interfaces/common';
import { getCurrenciesName, getCurrencyRelation } from '@/utils/mainPage';

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
  const [selectedCurrency, setSelectedCurrency] = useState<string>(givenCurrency as string);
  const [inputAmount, setInputAmount] = useState<number>(0);
  const [outputAmount, setOutputAmount] = useState<number>();

  useEffect(() => {
    setOutputAmount(
      () => +inputAmount * +getCurrencyRelation(cardCurrency, selectedCurrency, currencyList),
    );
  }, [inputAmount]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputAmount(+e.target.value);
  };

  const modal = (
    <Fragment>
      <Backdrop />
      <Wrapper>
        <StyledModal>
          <Header>
            <HeaderText>Currency Exchange</HeaderText>
            <CloseButton onClick={hide}>X</CloseButton>
          </Header>
          <Content>
            <DropDownList
              setSelectedCurrency={setSelectedCurrency}
              currenciesList={getCurrenciesName(currencyList).filter(
                (name) => name !== givenCurrency,
              )}
              defaultValue={givenCurrency}
            />
            <label>
              <input
                placeholder='Amount'
                value={inputAmount}
                onChange={handleInputChange}
              />
            </label>
            <select>
              <option
                disabled
                selected
              >
                {cardCurrency}
              </option>
            </select>
            <label>
              <input
                value={outputAmount}
                disabled
              />
            </label>
          </Content>
        </StyledModal>
      </Wrapper>
    </Fragment>
  );
  return isShown ? createPortal(modal, document.body) : null;
};
