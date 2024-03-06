import { useState } from 'react';
import { Container, Content, InnerText, TitleText } from './styled';

interface ExpandableFieldProps {
  title: string;
  content: string;
}

export const ExpandableField = ({ title, content }: ExpandableFieldProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Container onClick={handleToggle}>
        <TitleText>{title}</TitleText>
      </Container>
      <Content isOpen={isOpen}>
        <InnerText>{content}</InnerText>
      </Content>
    </div>
  );
};
