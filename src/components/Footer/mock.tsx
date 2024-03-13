import { StyledLink } from './styled';

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

export const infoText = `Since then, the company has grown organically to. Starsup is the world's largest trading platform, with $12 billion worth of currency trading and 500,000 tickets sold daily to tens of thousands of traders worldwide.`;
