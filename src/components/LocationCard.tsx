'use client';

import Image from 'next/image';
import styles from './Card.module.css';
import { motion } from 'motion/react';

interface Props {
  body: string;
  delay?: number;
  image: string;
  title: string;
}

export default function LocationCard(props: Props) {
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: props.delay }}
    >
      <Image
        src={props.image}
        alt={props.title}
        width={300}
        height={200}
        className={styles.image}
      />
      <div className={styles.cardContent}>
        <h3 style={{ textAlign: 'center', marginBottom: 8 }}>{props.title}</h3>
        <p style={{ textAlign: 'center', marginBlockEnd: 0 }}>{props.body}</p>
      </div>
    </motion.div>
  );
}
