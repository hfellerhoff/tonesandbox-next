import Link from 'next/link';
import React from 'react';
import styles from './CardLink.module.css';

interface Props {
  title: string;
  href: string;
  children: string;
}

const CardLink = ({ title, children, href }: Props) => {
  return (
    <Link href={href}>
      <a>
        <div className={styles.card}>
          <h2>{title}</h2>
          <p>{children}</p>
        </div>
      </a>
    </Link>
  );
};

export default CardLink;
