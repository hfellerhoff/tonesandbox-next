import React from 'react';
import { styled } from '../../../stitches.config';
import Link from '../core/Link';

interface Props {
  href: string;
  first?: boolean;
}

const HeaderLinkContent = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '4rem',
  width: '4rem',
  flexShrink: 0,
  borderBottom: '1px solid $slate7',
  borderRight: '1px solid $slate7',
  '&:hover': {
    background: 'linear-gradient(to bottom right, $amber9, $plum9)',
    color: 'white',
  },
});

const HeaderLink: React.FC<Props> = ({ children, href, first = false }) => {
  return (
    <Link href={href}>
      <HeaderLinkContent
        css={{
          borderTop: first ? '1px solid $slate7' : '',
        }}
      >
        {children}
      </HeaderLinkContent>
    </Link>
  );
};

export default HeaderLink;
