'use client';

import { usePathname } from 'next/navigation';
import Footer from './Footer';
import AdminSidebar from './admin/AdminSidebar';
import styles from '@/src/components/admin/admin.module.css';
import NavbarWrapper from './NavbarWrapper';

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const pathnameWithoutLocale = pathname.replace(/^\/[a-z]{2}/, '');

  const isAdmin = pathnameWithoutLocale.startsWith('/admin');

  return (
    <>
      {!isAdmin && <NavbarWrapper />}
      {children}
      {!isAdmin && <Footer />}
    </>
  );
}

export function AdminLayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const pathnameWithoutLocale = pathname.replace(/^\/[a-z]{2}/, '');
  const hiddenRoutes = ['/admin', '/admin/konto-erstellen'];
  const hiddenPatterns = [/^\/admin\/immobilien\/[^/]+$/, /^\/admin\/konto-erstellen\/[^/]+$/];
  const showSidebar =
    !hiddenRoutes.includes(pathnameWithoutLocale) &&
    !hiddenPatterns.some((pattern) => pattern.test(pathnameWithoutLocale));

  return (
    <div className={styles.pageDashboard}>
      {showSidebar && <AdminSidebar />}
      <div className={styles.pageContent}>{children}</div>
    </div>
  );
}
