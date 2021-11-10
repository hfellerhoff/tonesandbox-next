import { Box, Paragraph } from '@theme-ui/components';
import React, { useState } from 'react';
import styles from './Tooltip.module.css';

interface Props {
  content: string;
  children: string;
}

const Tooltip = ({ content, children }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{
        position: 'relative',
        display: 'inline-block',
        borderBottom: '1px dotted black',

        cursor: 'pointer',
      }}
    >
      <Paragraph
        sx={{
          fontSize: 1,
        }}
      >
        {children}
      </Paragraph>
      <Paragraph
        sx={{
          color: '#fff',
          textAlign: 'center',
          backgroundColor: '#1a1818',
          visibility: isHovered ? 'visible' : 'hidden',

          position: 'absolute',
          top: '100%',
          width: '16rem',
          right: 0,
          fontSize: 1,

          marginTop: 4,
          padding: 4,
          borderRadius: 4,
        }}
      >
        {content}
      </Paragraph>
    </Box>
  );
};

export default Tooltip;
