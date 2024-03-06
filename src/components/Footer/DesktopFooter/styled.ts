import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Copyright = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CopyrightText = styled.p`
  size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.gray5};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-right: 120px;
  margin-left: 120px;
`;

export const LinksContainer = styled.div`
  color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  flex-direction: column;
`;

export const LinksContent = styled.div`
  display: flex;
  flex-direction: column;
`;
