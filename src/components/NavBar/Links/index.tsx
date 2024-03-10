import { LinkContainer, StyledLink } from './styled';

import {options} from '@/constants'

export const LinkElement = (): JSX.Element => {
  const { NAV_ROUTS } = options;

  return (
    <LinkContainer>
      {NAV_ROUTS.map(({ name, to }) => (
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
};
