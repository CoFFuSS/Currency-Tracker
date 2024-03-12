import { StyledLink } from '@/components/Footer/styled';

export const routesOptions = [
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
