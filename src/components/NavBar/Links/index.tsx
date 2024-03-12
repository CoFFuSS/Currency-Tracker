import { options } from '@/constants/links';

import { LinkContainer, StyledLink } from './styled';

const { NAV_ROUTES } = options;

export const LinkElement = (): JSX.Element => (
  <LinkContainer>
    {NAV_ROUTES.map(({ to, name }) => (
      <StyledLink
        to={to}
        key={name}
        name-link={name}
      >
        {name}
      </StyledLink>
    ))}
  </LinkContainer>
);
