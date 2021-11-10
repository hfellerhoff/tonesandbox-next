import React from 'react';
import NextLink from 'next/link';
import { Link as ThemeLink } from 'theme-ui';

interface Props {
  href: string;
  target?: string;
  rel?: string;
}

const Link: React.FC<Props> = ({ children, href, target, rel }) => {
  return (
    <NextLink href={href}>
      <ThemeLink
        target={target}
        rel={rel}
        sx={{
          '&:hover': {
            cursor: 'pointer',
            background:
              'linear-gradient(to bottom right, #FDBB2D 0%, #3A1C71 100%)',
            color: 'white',
          },
        }}
      >
        {children}
      </ThemeLink>
    </NextLink>
  );
};

export default Link;
