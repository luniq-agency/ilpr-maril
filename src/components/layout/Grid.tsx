'use client';

import { ReactNode, useEffect, useState } from 'react';
import styles from './Layout.module.css';

interface Props {
  children: ReactNode;
  columns?: number;
  gap?: number | string;
  grow?: boolean;
  height?: number | string;
  mobile?: number;
  width?: string | number;
}

export default function Grid({ children, columns = 4, gap = '1rem', grow, width }: Props) {

  return (
    <div
      className={styles.grid}
      style={{
        flexGrow: grow ? 1 : 0,
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap,
        width,
      }}
    >
      {children}
    </div>
  );
}
