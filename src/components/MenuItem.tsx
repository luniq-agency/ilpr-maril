'use client';

import { OverlayPanel } from 'primereact/overlaypanel';
import { useRef } from 'react';
import { Link } from '@/src/i18n/routing';
import { motion, useInView } from 'motion/react';

interface Link {
  label: string;
  destination: string;
}

interface Props {
  label: string;
  links: Link[];
}

export function MenuItemSingle(props: Props) {
  const op = useRef<OverlayPanel>(null);

  return (
    <div>
      <span
        className="navlink"
        onClick={(e) => op.current && op.current.toggle(e)}
        style={{ cursor: 'pointer' }}
      >
        {props.label}
      </span>
      <OverlayPanel ref={op}>
        <div className="column gap-s">
          {props.links.map((l, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.15 }}
            >
              <Link href={l.destination as any} className="navlink">
                {l.label}
              </Link>
            </motion.div>
          ))}
        </div>
      </OverlayPanel>
    </div>
  );
}
