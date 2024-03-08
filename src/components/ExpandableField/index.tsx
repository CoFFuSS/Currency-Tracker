import { useState } from 'react';
import { Container, Content, InnerText, StyledArrow, TitleText } from './styled';

interface ExpandableFieldProps {
  title: string;
  content: JSX.Element;
}

export const ExpandableField = ({ title, content }: ExpandableFieldProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      <Container onClick={handleToggle}>
        <TitleText>{title}</TitleText>
        <StyledArrow />
      </Container>
      <Content isOpen={isOpen}>
        <InnerText>{content}</InnerText>
      </Content>
    </div>
  );
};
