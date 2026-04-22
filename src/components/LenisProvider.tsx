'use client';

import { ReactNode, useEffect } from 'react';
import Lenis from 'lenis';

export default function LenisProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      autoRaf: true, // übernimmt automatisch den RAF-loop
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
