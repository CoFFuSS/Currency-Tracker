import styled from 'styled-components';
export const Container = styled.div`
  cursor: pointer;

  display: flex;
  gap: 15px;
  align-items: center;

  height: ${({ theme }) => theme.spaces.xls};
  margin-right: ${({ theme }) => theme.spaces.xmm};
  margin-left: ${({ theme }) => theme.spaces.xmm};

  border-bottom: 1px solid ${({ theme }) => theme.colors.gray4};
`;

export const Content = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};

  margin-right: ${({ theme }) => theme.spaces.xmm};
  margin-left: ${({ theme }) => theme.spaces.xmm};

  line-height: 24px;

  background-color: ${({ theme }) => theme.colors.primary};
`;

export const InnerText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.colors.secondary};
`;

export const TitleText = styled.span`
  font-size: ${({ theme }) => theme.fontSize.ss};
  color: ${({ theme }) => theme.colors.secondary};
`;
