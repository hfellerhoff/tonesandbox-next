import React from 'react';
import { styled } from '../../../stitches.config';
import Link from '../core/Link';

interface Props {
  href: string;
}

const HeaderLinkContent = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '4rem',
  paddingLeft: '2rem',
  paddingRight: '2rem',
  flexShrink: 0,
  borderRight: '1px solid $slate7',
  '&:hover': {
    background: 'linear-gradient(to bottom right, $amber9, $plum9)',
    color: 'white',
  },
});

const HeaderTopLink: React.FC<Props> = ({ children, href }) => {
  return (
    <Link href={href}>
      <HeaderLinkContent>{children}</HeaderLinkContent>
    </Link>
  );
};

export default HeaderTopLink;
