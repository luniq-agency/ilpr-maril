'use client';

import Link from 'next/link';
import styles from '@/src/components/admin/admin.module.css';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

interface Props {
  icon?: string;
  target: string;
  text: string;
}

export default function AdminNavLink({ icon, target, text }: Props) {
  const pathname = usePathname();
  const isActive = pathname === target || pathname.startsWith(target + '/');

  return (
    <Link href={target} className={`${styles.navButton} ${isActive ? styles.navButtonActive : ''}`}>
      {icon && <Image src={icon} width={12} height={12} alt="" />}
      <span>{text}</span>
    </Link>
  );
}
