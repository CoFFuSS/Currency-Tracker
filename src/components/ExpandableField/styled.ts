import styled from 'styled-components';
import Icon from '@/assets/images/Down_Arrow.svg';

export const Container = styled.div`
  cursor: pointer;

  display: flex;
  gap: ${({ theme }) => theme.specialSpaces.m};
  align-items: center;
  justify-content: space-between;

  height: ${({ theme }) => theme.spaces.xls};
  margin-right: ${({ theme }) => theme.spaces.xmm};
  margin-left: ${({ theme }) => theme.spaces.xmm};

  border-bottom: 1px solid ${({ theme }) => theme.colors.gray4};
`;

export const Content = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};

  margin-right: ${({ theme }) => theme.spaces.xmm};
  margin-left: ${({ theme }) => theme.spaces.xmm};

  line-height: ${({ theme }) => theme.spaces.m};

  background-color: ${({ theme }) => theme.colors.primary};
`;

export const InnerText = styled.div`
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.colors.gray5};
`;

export const TitleText = styled.span`
  font-size: ${({ theme }) => theme.fontSize.ss};
  color: ${({ theme }) => theme.colors.secondary};
`;

export const StyledArrow = styled(Icon)`
  fill: ${({ theme }) => theme.colors.secondary};
`;
