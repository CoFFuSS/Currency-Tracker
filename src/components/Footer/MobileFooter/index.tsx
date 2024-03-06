import { ExpandableField } from '@/components/ExpandableField';
import { routes_options, title } from '@/components/Footer/mock';
import { InfoBlock, LogoContainer, StyledLogo, Title } from '@/components/Footer/styled';

export const MobileFooter = () => {
  return (
    <>
      <InfoBlock>
        <LogoContainer>
          <StyledLogo />
        </LogoContainer>
        <Title>{title}</Title>
      </InfoBlock>
      {routes_options.map(({ title, content }) => (
        <ExpandableField
          key={title}
          title={title}
          content={content}
        />
      ))}
    </>
  );
};
