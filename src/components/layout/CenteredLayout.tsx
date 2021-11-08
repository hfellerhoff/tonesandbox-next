import React from 'react';
import styles from './CenteredLayout.module.css';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const CenteredLayout = ({ children }: Props) => {
  return <main className={styles.container}>{children}</main>;
};

export default CenteredLayout;
