import { Box } from '@theme-ui/components';
import React from 'react';
import { BoxOwnProps, BoxProps } from 'theme-ui';

type Props = BoxOwnProps &
  BoxProps & {
    vertical?: boolean;
    horizontal?: boolean;
  };

const Padding: React.FC<Props> = ({
  vertical = false,
  horizontal = false,
  children,
  sx,
  ...rest
}) => {
  const padHorizontal = (horizontal && !vertical) || (!horizontal && !vertical);
  const padVertical = (vertical && !horizontal) || (!horizontal && !vertical);

  return (
    <Box
      sx={{
        paddingLeft: padHorizontal ? [6, 8, 8, 12] : [],
        paddingRight: padHorizontal ? [6, 8, 8, 12] : [],
        paddingTop: padVertical ? [6, 8, 8, 12] : [],
        paddingBottom: padVertical ? [6, 8, 8, 12] : [],
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};

export default Padding;
