import React from 'react';
import { styled } from '../../../stitches.config';
import Header from '../header/Header';

interface Props {}

const LayoutContainer = styled('div', {
  height: '100vh',
  width: '100vw',
});

const ChildrenContainer = styled('div', {
  padding: '1rem 0 0 1rem',
  height: '100%',
  width: '100%',
});

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <LayoutContainer>
      <Header />
      <ChildrenContainer>{children}</ChildrenContainer>
    </LayoutContainer>
  );
};

export default Layout;
