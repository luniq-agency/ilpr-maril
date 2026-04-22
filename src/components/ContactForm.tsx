'use client';

import { useTranslations } from 'next-intl';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { useState } from 'react';
import { ButtonPrimary } from './Button';
import { Button } from 'primereact/button';

type PageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default function ContactForm() {
  const t = useTranslations('ContactForm');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div className="form-wrapper">
      <div className="column">
        <label>{t('name')}</label>
        <InputText value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div style={{ height: '2rem' }} />
      <div className="column">
        <label>{t('email')}</label>
        <InputText value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div style={{ height: '2rem' }} />
      <div className="column">
        <label>{t('phone')}</label>
        <InputText value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>
      <div style={{ height: '2rem' }} />
      <div className="column">
        <label>{t('message')}</label>
        <InputTextarea value={message} onChange={(e) => setMessage(e.target.value)} autoResize />
      </div>
      <div style={{ height: '2rem' }} />
      <Button
        className="button-primary small"
        label={t('cta')}
        disabled={!name || !email || !phone || !message}
      />
    </div>
  );
}
