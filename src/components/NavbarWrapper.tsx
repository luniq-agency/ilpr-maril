'use client';

import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import Navbar from './Navbar';

export default function NavbarWrapper() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollY, 'change', (current) => {
    const previous = scrollY.getPrevious() ?? 0;

    // Immer sichtbar ganz oben
    if (current < 50) {
      setVisible(true);
    } else if (current > previous) {
      // Scroll down
      setVisible(false);
    } else {
      // Scroll up
      setVisible(true);
    }
  });

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="navbar-wrapper-outer"
    >
      <Navbar classname={visible ? 'navbar-wrapper scrolling' : 'navbar-wrapper'} />
    </motion.div>
  );
}
