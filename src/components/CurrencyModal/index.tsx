import { Fragment } from 'react';
import { Backdrop, Wrapper, StyledModal, HeaderText, CloseButton, Content, Header } from './styled';
import { createPortal } from 'react-dom';

interface CurrencyModalProps {
  isShown: boolean;
  hide: () => void;
  currencyList: Record<string, { code: string; value: string }>;
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
            {Object.values(currencyList).map(({ code, value }) => (
              <h1 key={code}>
                {code}, {value}
              </h1>
            ))}
            , {baseCurrency}
          </Content>
        </StyledModal>
      </Wrapper>
    </Fragment>
  );

  return isShown ? createPortal(modal, document.body) : null;
};
