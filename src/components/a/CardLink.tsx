import Link from '../core/Link';
import React from 'react';
import styles from './CardLink.module.css';
import { Card, Heading, Paragraph } from '@theme-ui/components';
import { theme } from '../../../styles/theme';

interface Props {
  title: string;
  href: string;
  children: string;
}

const CardLink = ({ title, children, href }: Props) => {
  return (
    <Link href={href}>
      <Card
        sx={{
          padding: 6,
          // marginTop: 4,
          // marginBottom: 4,
          // marginRight: `-${(theme.space as string[])[4]}`,
          // marginLeft: `-${(theme.space as string[])[4]}`,

          boxShadow: '0px 3px 6px 0px rgba(0, 0, 0, 0.18)',
          borderRadius: 4,
          backgroundColor: '#FBAB7E',
          backgroundImage: 'linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)',

          '&:hover': {
            backgroundColor: '#fb9d66',
            backgroundImage: 'linear-gradient(62deg, #fb9d66 0%, #fdcc51 100%)',
          },
        }}
      >
        <Heading as='h3'>{title}</Heading>
        <Paragraph sx={{ marginTop: 1 }}>{children}</Paragraph>
      </Card>
    </Link>
  );
};

export default CardLink;
