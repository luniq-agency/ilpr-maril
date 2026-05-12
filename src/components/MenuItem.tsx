'use client';

import { OverlayPanel } from 'primereact/overlaypanel';
import { useRef } from 'react';
import { Link } from '@/src/i18n/routing';
import { motion } from 'motion/react';

interface Link {
  label: string;
  destination: string;
}

interface Props {
  label: string;
  links: Link[];
  links2?: Link[];
  links3?: Link[];
  linksLabel?: string;
  linksLabel2?: string;
  linksLabel3?: string;
}

export function MenuItemSingle(props: Props) {
  const op = useRef<OverlayPanel>(null);

  const easeInOutQuart: [number, number, number, number] = [0.76, 0, 0.24, 1];

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
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: easeInOutQuart, delay: i * 0.15 }}
            >
              <Link
                href={l.destination as any}
                className="navlink"
                onClick={(e) => op.current?.toggle(e)}
              >
                {l.label}
              </Link>
            </motion.div>
          ))}
        </div>
      </OverlayPanel>
    </div>
  );
}

export function MenuItemTripple(props: Props) {
  const op = useRef<OverlayPanel>(null);

  const easeInOutQuart: [number, number, number, number] = [0.76, 0, 0.24, 1];

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
        <div className="row gap-xl">
          <div className="column gap-s" style={{ minWidth: 190 }}>
            <span className="navlink no-hover" style={{ fontWeight: 600 }}>
              {props.linksLabel}
            </span>
            {props.links.map((l, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: easeInOutQuart, delay: i * 0.15 }}
              >
                <Link
                  href={l.destination as any}
                  className="navlink"
                  onClick={(e) => op.current?.toggle(e)}
                >
                  {l.label}
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="column gap-s" style={{ minWidth: 190 }}>
            <span className="navlink no-hover" style={{ fontWeight: 600 }}>
              {props?.linksLabel2}
            </span>
            {props.links2?.map((l, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: easeInOutQuart, delay: i * 0.2 }}
              >
                <Link
                  href={l.destination as any}
                  className="navlink"
                  onClick={(e) => op.current?.toggle(e)}
                >
                  {l.label}
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="column gap-s" style={{ minWidth: 190 }}>
            <span className="navlink no-hover" style={{ fontWeight: 600 }}>
              {props?.linksLabel3}
            </span>
            {props.links3?.map((l, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: easeInOutQuart, delay: i * 0.25 }}
              >
                <Link
                  href={l.destination as any}
                  className="navlink"
                  onClick={(e) => op.current?.toggle(e)}
                >
                  {l.label}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </OverlayPanel>
    </div>
  );
}
