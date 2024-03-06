import { StyledLink } from './styled';

export const routes_options = [
  {
    title: 'General',
    content: (
      <>
        {['Market', 'Service'].map((link, index) => (
          <div key={index}>
            <StyledLink
              to={link}
              name-link={link}
            >
              {link}
            </StyledLink>
          </div>
        ))}
      </>
    ),
  },
  {
    title: 'Product',
    content: (
      <>
        {['Sparks', 'Snaps'].map((link, index) => (
          <div key={index}>
            <StyledLink
              to={link}
              name-link={link}
            >
              {link}
            </StyledLink>
          </div>
        ))}
      </>
    ),
  },
  {
    title: 'Community',
    content: (
      <>
        {['Ideas', 'Streams'].map((link, index) => (
          <div key={index}>
            <StyledLink
              to={link}
              name-link={link}
            >
              {link}
            </StyledLink>
          </div>
        ))}
      </>
    ),
  },
];

export const title = 'Modsen Currency Tracker';

export const copyright = 'Startsup © 2023-2024, All Rights Reserved';
