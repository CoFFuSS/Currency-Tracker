import { Fragment } from 'react';
import { Backdrop, Wrapper, StyledModal, HeaderText, CloseButton, Content, Header } from './styled';
import { createPortal } from 'react-dom';

interface CurrencyModalProps {
  isShown: boolean;
  hide: () => void;
  currencyList: string[];
  baseCurrency: string;
}

export const CurrencyModal = ({
  isShown,
  hide,
  currencyList,
  baseCurrency,
}: CurrencyModalProps) => {
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
            {currencyList}, {baseCurrency}
          </Content>
        </StyledModal>
      </Wrapper>
    </Fragment>
  );
  console.log(currencyList);

  return isShown ? createPortal(modal, document.body) : null;
};
