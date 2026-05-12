'use client';

import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { useState } from 'react';
import { postCreate } from '@/src/actions/blog';
import { useRouter } from 'next/navigation';
import { languages } from '@/src/constants/options';
import styles from '@/src/components/admin/admin.module.css';
import { slugify } from '@/src/actions/utils';
import { jobCreate } from '@/src/actions/jobs';

export function AdminAddBlogButton() {
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const [blogName, setBlogName] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const createBlog = async () => {
    setSubmitting(true);
    try {
      const payload = {
        language: selectedLanguage || '',
        organization: process.env.NEXT_PUBLIC_ORGANIZATION_ID,
        slug: slugify(blogName),
        status: 'draft',
        title: blogName,
      };
      await postCreate(payload);
      router.refresh();
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
      setVisible(false);
    }
  };

  return (
    <>
      <Dialog
        visible={visible}
        onHide={() => setVisible(false)}
        draggable={false}
        style={{ width: 400 }}
        header="Neuer Beitrag"
      >
        <div className="column gap-m">
          <InputText
            className={styles.input}
            value={blogName}
            onChange={(e) => setBlogName(e.target.value)}
            placeholder="Name des Beitrags"
          />
          <Dropdown
            className={styles.dropdown}
            options={languages}
            optionValue="value"
            optionLabel="label"
            placeholder="Sprache"
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.value)}
          />
          <Button
            label="Beitrag erstellen"
            className={styles.buttonPrimary}
            disabled={!blogName || !selectedLanguage || submitting}
            onClick={createBlog}
          />
        </div>
      </Dialog>
      <Button
        label="Neuer Beitrag"
        className={styles.buttonPrimary}
        icon="pi pi-plus"
        onClick={() => setVisible(true)}
      />
    </>
  );
}

export function AdminAddJobButton() {
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const [blogName, setBlogName] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const createBlog = async () => {
    setSubmitting(true);
    try {
      const payload = {
        language: selectedLanguage || '',
        organization: process.env.NEXT_PUBLIC_ORGANIZATION_ID,
        slug: slugify(blogName),
        status: 'draft',
        title: blogName,
      };
      await jobCreate(payload);
      router.refresh();
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
      setVisible(false);
    }
  };

  return (
    <>
      <Dialog
        visible={visible}
        onHide={() => setVisible(false)}
        draggable={false}
        style={{ width: 400 }}
        header="Neuer Beitrag"
      >
        <div className="column gap-m">
          <InputText
            className={styles.input}
            value={blogName}
            onChange={(e) => setBlogName(e.target.value)}
            placeholder="Name des Beitrags"
          />
          <Dropdown
            className={styles.dropdown}
            options={languages}
            optionValue="value"
            optionLabel="label"
            placeholder="Sprache"
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.value)}
          />
          <Button
            label="Beitrag erstellen"
            className={styles.buttonPrimary}
            disabled={!blogName || !selectedLanguage || submitting}
            onClick={createBlog}
          />
        </div>
      </Dialog>
      <Button
        label="Neuer Beitrag"
        className={styles.buttonPrimary}
        icon="pi pi-plus"
        onClick={() => setVisible(true)}
      />
    </>
  );
}
