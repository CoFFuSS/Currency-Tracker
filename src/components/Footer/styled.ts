import styled from 'styled-components';

export const StyledFooterContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledFooterListContainer = styled.div`
  cursor: pointer;

  width: 100%;
  padding: 18px;

  font-size: 15px;
  color: #444;
  text-align: left;

  background-color: #eee;
  border: none;
  outline: none;

  &:hover {
    background-color: #ccc;
  }
`;

export const StyledContent = styled.div`
  overflow: hidden;
  display: none;
  padding: 0 18px;
  background-color: #f1f1f1;
`;
