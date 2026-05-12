'use client';

import { useTranslations } from 'next-intl';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { useState } from 'react';
import { Button } from 'primereact/button';
import { inquiryCreate } from '../actions/contact';
import { motion } from 'motion/react';

export default function ContactForm() {
  const t = useTranslations('ContactForm');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    const payload = {
      email,
      form: 'contact',
      message,
      name,
      organization: process.env.NEXT_PUBLIC_ORGANIZATION_ID,
      phone,
    };
    await inquiryCreate(payload);
    setSubmitted(true);
  };

  if (submitted)
    return <span>Vielen Dank für Ihre Anfrage! Wir melden uns schnellstmöglich bei Ihnen.</span>;

  return (
    <motion.div
      className="form-wrapper"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
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
        onClick={handleSubmit}
        disabled={!name || !email || !phone || !message}
      />
    </motion.div>
  );
}

export function PressContactForm() {
  const t = useTranslations('PressKitForm');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    const payload = {
      email,
      form: 'press-contact',
      message,
      name,
      organization: process.env.NEXT_PUBLIC_ORGANIZATION_ID,
      phone,
    };
    await inquiryCreate(payload);
    setSubmitted(true);
  };

  if (submitted) return;
  <div className="form-wrapper">
    <span>Vielen Dank für Ihre Anfrage! Wir melden uns schnellstmöglich bei Ihnen.</span>
  </div>;

  return (
    <motion.div
      className="form-wrapper"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
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
        <InputTextarea
          value={message}
          placeholder={t('message-placeholder')}
          onChange={(e) => setMessage(e.target.value)}
          autoResize
          rows={1}
        />
      </div>
      <div style={{ height: '2rem' }} />
      <Button
        className="button-primary small"
        label={t('cta')}
        onClick={handleSubmit}
        disabled={!name || !email || !phone || !message}
      />
    </motion.div>
  );
}

export function PressKitRequest() {
  const t = useTranslations('PressKitForm');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    const payload = {
      email,
      form: 'press-kit',
      message,
      name,
      organization: process.env.NEXT_PUBLIC_ORGANIZATION_ID,
      phone,
    };
    await inquiryCreate(payload);
    setSubmitted(true);
  };

  if (submitted) return;
  <div className="form-wrapper">
    <span>Vielen Dank für Ihre Anfrage! Wir melden uns schnellstmöglich bei Ihnen.</span>
  </div>;

  return (
    <motion.div
      className="form-wrapper"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
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
        <InputTextarea
          value={message}
          placeholder={t('message-placeholder')}
          onChange={(e) => setMessage(e.target.value)}
          autoResize
          rows={1}
        />
      </div>
      <div style={{ height: '2rem' }} />
      <Button
        className="button-primary small"
        label={t('cta')}
        onClick={handleSubmit}
        disabled={!name || !email || !phone || !message}
      />
    </motion.div>
  );
}
