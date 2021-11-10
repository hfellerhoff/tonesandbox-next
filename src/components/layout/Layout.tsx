import { Box } from '@theme-ui/components';
import React from 'react';
import Header from '../header/Header';

interface Props {}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Box
      sx={{
        height: '100vh',
      }}
    >
      <Header />
      <Box
        sx={{
          paddingTop: 16,
          paddingLeft: 16,
          height: '100%',
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
