import { Flex, Paragraph } from '@theme-ui/components';
import React, { useState } from 'react';
import { MdArrowForward } from 'react-icons/md';
import Link from '../core/Link';

interface Props {
  href: string;
  first?: boolean;
}

const HeaderLink: React.FC<Props> = ({ children, href, first = false }) => {
  return (
    <Link href={href}>
      <Flex
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
          height: '4rem',
          width: '4rem',
          flexShrink: 0,
          borderBottom: '1px solid #454545',
          borderRight: '1px solid #454545',
          borderTop: first ? '1px solid #454545' : '',
          '&:hover': {
            background:
              'linear-gradient(to bottom right, #FDBB2D 0%, #3A1C71 100%)',
            color: 'white',
          },
        }}
      >
        {children}
      </Flex>
    </Link>
  );
};

export default HeaderLink;
