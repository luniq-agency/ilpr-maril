'use client';

import { useRouter } from 'next/navigation';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Button } from 'primereact/button';
import styles from '@/src/components/admin/admin.module.css';
import AdminNavLink from './AdminNavLink';
import Image from 'next/image';

export default function AdminSidebar() {
  const router = useRouter();

  const handleSignOut = () => {
    document.cookie = 'bubble_token=; path=/; max-age=0';
    router.push('/admin');
  };

  return (
    <div className={styles.sidebar}>
      <div style={{ padding: '1rem', position: 'relative' }}>
        <Image
          src="/ilpr-maril-logo-gold.svg"
          alt="ILPR Maril"
          width={120}
          height={27}
          className="logo-navbar"
        />
      </div>
      <div style={{ flexGrow: 1 }}>
        <Accordion>
          <AccordionTab header="News">
            <div className={`column ${styles.accordionContent}`}>
              <AdminNavLink target="/admin/blog" text="Alle News" />
            </div>
          </AccordionTab>
          <AccordionTab header="Jobs">
            <div className={`column ${styles.accordionContent}`}>
              <AdminNavLink target="/admin/jobs" text="Alle Jobs" />
            </div>
          </AccordionTab>
          <AccordionTab header="Anfragen">
            <div className={`column ${styles.accordionContent}`}>
              <AdminNavLink target="/admin/contact" text="Alle Anfragen" />
            </div>
          </AccordionTab>
          {/*
          <AccordionTab header="Benutzer">
            <div className={`column ${styles.accordionContent}`}>
              <AdminNavLink icon="/icons/users.svg" target="/admin/benutzer" text="Alle Benutzer" />
            </div>
          </AccordionTab>
          */}
        </Accordion>
      </div>
      <div style={{ padding: '1rem' }}>
        <Button
          label="Abmelden"
          className={styles.buttonTransparent}
          icon="pi pi-sign-out"
          onClick={handleSignOut}
        />
      </div>
    </div>
  );
}
