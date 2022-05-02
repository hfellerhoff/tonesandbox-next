import React, { useState } from 'react';
import { styled } from '../../../stitches.config';

interface Props {
  content: string;
  children: string;
}

const TooltipContainer = styled('div', {
  position: 'relative',
  display: 'inline-block',
  borderBottom: '1px dotted $slate12',

  cursor: 'pointer',
});

const TooltipText = styled('p', {
  color: '$slate1',
  textAlign: 'center',
  backgroundColor: '$slate12',

  position: 'absolute',
  top: '100%',
  width: '16rem',
  right: 0,

  marginTop: '1rem',
  padding: '1rem',
  borderRadius: '1rem',
});

const Tooltip = ({ content, children }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <TooltipContainer
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p>{children}</p>
      <TooltipText
        css={{
          visibility: isHovered ? 'visible' : 'hidden',
        }}
      >
        {content}
      </TooltipText>
    </TooltipContainer>
  );
};

export default Tooltip;
