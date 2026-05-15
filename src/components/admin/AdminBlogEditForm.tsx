'use client';

import { News } from '@/src/types/Database';
import { Button } from 'primereact/button';
import styles from '@/src/components/admin/admin.module.css';
import { InputText } from 'primereact/inputtext';
import { forwardRef, useRef, useState } from 'react';
import { postUpdate } from '@/src/actions/blog';
import { Toast } from 'primereact/toast';
import { useRouter } from 'next/navigation';
import { InputTextarea } from 'primereact/inputtextarea';
import { Dropdown } from 'primereact/dropdown';
import { languages, statusOptions } from '@/src/constants/options';
import { Calendar } from 'primereact/calendar';
import Image from 'next/image';
import { FileUpload } from 'primereact/fileupload';

export interface AdminBlogEditFormHandle {
  save: () => Promise<void>;
}

interface Props {
  blog: News;
}

const AdminBlogEditForm = forwardRef<AdminBlogEditFormHandle, Props>(({ blog }, ref) => {
  const [formData, setFormData] = useState({
    body: blog.body ?? '',
    category: blog.category ?? '',
    excerpt: blog.excerpt ?? '',
    language: blog.language ?? '',
    organization: blog.organization ?? '',
    published_date: blog.published_date ?? new Date(),
    slug: blog.slug ?? '',
    status: blog.status ?? '',
    thumbnail: blog.thumbnail ?? '',
    title: blog.title ?? '',
  });

  const router = useRouter();

  const [saving, setSaving] = useState(false);
  const toast = useRef<Toast>(null);

  const saveArticle = async () => {
    setSaving(true);
    try {
      const payload = {
        ...formData,
      };
      const result = await postUpdate(blog.id, payload);
      console.log('Result:', result);
      toast.current?.show({
        severity: 'success',
        summary: 'Erfolg',
        detail: 'Änderungen erfolgreich gespeichert.',
      });
      router.refresh();
    } catch (err) {
      console.error('Speichern fehlgeschlagen:', err);
    } finally {
      setSaving(false);
    }
  };

  return (
    <>
      <div className="row justify-space-between">
        <h1 className={styles.h1}>{blog.title}</h1>
        <Button
          label="Speichern"
          className={styles.buttonPrimary}
          disabled={saving}
          icon={saving ? 'pi pi-spinner' : undefined}
          onClick={saveArticle}
        />
      </div>
      <div className="spacer-l" />
      <div className="row gap-l">
        <div className="column" style={{ alignSelf: 'flex-start', width: '100%' }}>
          <InputText
            className={styles.adminInput}
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            style={{ fontSize: 24 }}
          />
          <div className="spacer-m" />
          <InputTextarea
            className={styles.adminInput}
            placeholder="Schreibe deinen Text hier..."
            value={formData.body}
            onChange={(e) => setFormData({ ...formData, body: e.target.value })}
          />
        </div>
        <div className={styles.editorSidebar}>
          <label>Status</label>
          <Dropdown
            className={styles.editorDropdown}
            options={statusOptions}
            value={formData.status}
            optionLabel="label"
            optionValue="value"
            onChange={(e) => setFormData({ ...formData, status: e.value })}
          />
          <div className="spacer-m" />
          <label>Sprache</label>
          <Dropdown
            className={styles.editorDropdown}
            options={languages}
            value={formData.language}
            optionLabel="label"
            optionValue="value"
            onChange={(e) => setFormData({ ...formData, language: e.value })}
          />
          <div className="spacer-m" />
          <label>Veröffentlichungsdatum</label>
          <Calendar
            className={styles.editorCalendar}
            value={formData.published_date}
            onChange={(e) => setFormData({ ...formData, published_date: e.value || new Date() })}
          />
          <div className="spacer-m" />
          <label>Auszug</label>
          <InputTextarea
            className={styles.editorDropdown}
            maxLength={120}
            value={formData.excerpt}
            onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
          />
          <div className="spacer-m" />
          <label>Vorschaubild</label>
          {formData.thumbnail ? (
            <Image width={252} height={150} alt={formData.title} src={formData.thumbnail} />
          ) : (
            <FileUpload
              chooseLabel="Bild auswählen"
              mode="basic"
              style={{ width: '100%', height: 150 }}
              uploadLabel="Bild hochladen"
            />
          )}
        </div>
      </div>
    </>
  );
});

AdminBlogEditForm.displayName = 'AdminBlogEditForm';
export default AdminBlogEditForm;
