'use client';

import { Job } from '@/src/types/Database';
import { Button } from 'primereact/button';
import styles from '@/src/components/admin/admin.module.css';
import { forwardRef, useRef, useState } from 'react';
import { Toast } from 'primereact/toast';
import { useRouter } from 'next/navigation';
import { InputTextarea } from 'primereact/inputtextarea';
import { Dropdown } from 'primereact/dropdown';
import { languages, statusOptions } from '@/src/constants/options';
import { Calendar } from 'primereact/calendar';
import { jobUpdate } from '@/src/actions/jobs';
import { Editor } from 'primereact/editor';

export interface AdminBlogEditFormHandle {
  save: () => Promise<void>;
}

interface Props {
  job: Job;
}

const AdminJobEditForm = forwardRef<AdminBlogEditFormHandle, Props>(({ job }, ref) => {
  const [formData, setFormData] = useState({
    description: job.description ?? '',
    excerpt: job.excerpt ?? '',
    language: job.language ?? '',
    location: job.location ?? '',
    organization: job.organization ?? '',
    publish_date: job.publish_date ?? new Date(),
    slug: job.slug ?? '',
    status: job.status ?? '',
    title: job.title ?? '',
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
      const result = await jobUpdate(job.id, payload);
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
        <h1 className={styles.h1}>{job.title}</h1>
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
        <div
          className="column"
          style={{ alignSelf: 'flex-start', width: '100%', minHeight: 0, flex: 1 }}
        >
          <InputTextarea
            className={styles.adminInput}
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            style={{ fontSize: 24 }}
            autoResize
            rows={1}
          />
          <div className="spacer-m" />
          <div style={{ height: 'calc(100vh - 300px)', overflow: 'hidden' }}>
            <Editor
              className={styles.adminInput}
              placeholder="Schreibe deinen Text hier..."
              style={{ height: 'calc(100vh - 300px)' }}
              value={formData.description}
              onTextChange={(e) => setFormData({ ...formData, description: e.htmlValue || '' })}
            />
          </div>
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
            value={formData.publish_date}
            onChange={(e) => setFormData({ ...formData, publish_date: e.value || new Date() })}
          />
          <div className="spacer-m" />
          <label>Auszug</label>
          <InputTextarea
            className={styles.editorDropdown}
            maxLength={120}
            value={formData.excerpt}
            onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
          />
        </div>
      </div>
    </>
  );
});

AdminJobEditForm.displayName = 'AdminJobEditForm';
export default AdminJobEditForm;
