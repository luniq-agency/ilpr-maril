'use client';

import styles from './BenefitBox.module.css';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

interface Props {
  image?: string;
  title: string;
  body: string;
  delay?: number;
}

export default function BenefitBox(props: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });
  return (
    <motion.div
      className={styles.wrapper}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut', delay: props.delay || 0 }}
    >
      <img src={props.image} width={40} height={40} alt="" />
      <h3 className={styles.h3}>{props.title}</h3>
      <span className={styles.body}>{props.body}</span>
    </motion.div>
  );
}
