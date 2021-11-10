import { Box, Flex, Heading, Paragraph } from '@theme-ui/components';
import React from 'react';
import Link from '../core/Link';
import MIDI from '../midi';
import { MdCheckBoxOutlineBlank, MdPiano } from 'react-icons/md';
import HeaderLink from './HeaderLink';
import { useRouter } from 'next/dist/client/router';
import HeaderTopLink from './HeaderTopLink';

interface Props {}

const Header = ({}: Props) => {
  const router = useRouter();

  const pathnameArray = router.pathname.split('/');
  const breadcrumbs =
    pathnameArray.length > 1
      ? pathnameArray
          .slice(1, pathnameArray.length)
          .map(
            (word) =>
              word.substring(0, 1).toUpperCase() +
              word.substring(1, word.length)
          )
      : [];

  return (
    <>
      <Box
        as='header'
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'absolute',
          width: '100%',
          borderBottom: '1px solid #454545',
          background: '#EDEDED',
          // paddingLeft: 16,
          zIndex: 1,
        }}
      >
        <Flex>
          <Link href='/'>
            <Flex
              sx={{
                alignItems: 'center',
                justifyContent: 'center',
                borderRight: '1px solid #454545',
                paddingLeft: [6, 8, 12],
                paddingRight: [6, 8, 12],
                height: '4rem',
              }}
            >
              <Heading
                as='h1'
                sx={{
                  fontSize: 3,
                }}
              >
                Tone Sandbox
              </Heading>
            </Flex>
          </Link>
          {breadcrumbs.length > 0 && breadcrumbs[0] !== '' && (
            <HeaderTopLink href={pathnameArray.slice(0, 2).join('/')}>
              <Paragraph>{breadcrumbs[0]}</Paragraph>
            </HeaderTopLink>
          )}
          {breadcrumbs.length > 1 && (
            <HeaderTopLink href={pathnameArray.slice(0, 3).join('/')}>
              <Paragraph>{breadcrumbs[1]}</Paragraph>
            </HeaderTopLink>
          )}
        </Flex>
        <Flex
          sx={{
            height: '4rem',
            paddingLeft: [6, 8, 12],
            paddingRight: [6, 8, 12],
            alignItems: 'center',
            justifyContent: 'center',
            borderLeft: '1px solid #454545',
          }}
        >
          <MIDI />
        </Flex>
      </Box>
      <Box
        as='nav'
        sx={{
          position: 'absolute',
          height: '100%',
          width: '4rem',
          marginTop: 16,
          borderRight: '1px solid #454545',
          background: '#EDEDED',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <HeaderLink href='/perform/piano' first>
          <MdPiano size={24} />
        </HeaderLink>
        <HeaderLink href='/create/sequencer'>
          <MdCheckBoxOutlineBlank size={24} />
        </HeaderLink>
      </Box>
    </>
  );
};

export default Header;
