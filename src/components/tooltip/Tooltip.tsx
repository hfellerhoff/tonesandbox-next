import React from 'react';
import styles from './Tooltip.module.css';

interface Props {
  content: string;
  children: string;
}

const Tooltip = ({ content, children }: Props) => {
  return (
    <div className={styles.tooltip}>
      {children}
      <span className={styles.text}>{content}</span>
    </div>
  );
};

export default Tooltip;
