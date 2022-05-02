import React from 'react';
import Link from '../core/Link';
import MIDI from '../midi';
import { MdCheckBoxOutlineBlank, MdPiano } from 'react-icons/md';
import HeaderLink from './HeaderLink';
import { useRouter } from 'next/dist/client/router';
import HeaderTopLink from './HeaderTopLink';
import { styled } from '../../../stitches.config';
import Flex from '../utility/Flex';
import { H1 } from '../utility/Headings';

interface Props {}

const TopHeader = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'absolute',
  width: '100%',
  borderBottom: '1px solid $slate7',
  zIndex: 1,
  background: '$slate1',
});

const LeftHeader = styled('nav', {
  position: 'absolute',
  height: '100%',
  width: '4rem',
  marginTop: '4rem',
  borderRight: '1px solid $slate7',
  zIndex: 1,
  display: 'flex',
  flexDirection: 'column',
  background: '$slate1',
});

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
      <TopHeader>
        <Flex>
          <Link href='/'>
            <Flex
              css={{
                alignItems: 'center',
                justifyContent: 'center',
                borderRight: '1px solid $slate7',
                paddingLeft: '2rem',
                paddingRight: '2rem',
                height: '4rem',
                '&:hover': {
                  background:
                    'linear-gradient(to bottom right, $amber9, $plum9)',
                },
              }}
            >
              <H1 css={{ fontSize: '1.125rem' }}>Tone Sandbox</H1>
            </Flex>
          </Link>
          {breadcrumbs.length > 0 && breadcrumbs[0] !== '' && (
            <HeaderTopLink href={pathnameArray.slice(0, 2).join('/')}>
              <p>{breadcrumbs[0]}</p>
            </HeaderTopLink>
          )}
          {breadcrumbs.length > 1 && (
            <HeaderTopLink href={pathnameArray.slice(0, 3).join('/')}>
              <p>{breadcrumbs[1]}</p>
            </HeaderTopLink>
          )}
        </Flex>
        <Flex
          css={{
            alignItems: 'center',
            justifyContent: 'center',
            borderLeft: '1px solid $slate7',
            paddingLeft: '2rem',
            paddingRight: '2rem',
            height: '4rem',
          }}
        >
          <MIDI />
        </Flex>
      </TopHeader>
      <LeftHeader>
        <HeaderLink href='/perform/piano' first>
          <MdPiano size={24} />
        </HeaderLink>
        <HeaderLink href='/create/sequencer'>
          <MdCheckBoxOutlineBlank size={24} />
        </HeaderLink>
      </LeftHeader>
    </>
  );
};

export default Header;
