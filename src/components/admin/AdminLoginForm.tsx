'use client';

import styles from '@/src/components/admin/admin.module.css';
import { InputText } from 'primereact/inputtext';
import { useState } from 'react';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { login } from '@/src/app/services/auth';
import { useRouter } from 'next/navigation';

export default function AdminLoginForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await login(email, password);
      //const res = await membershipLookup(email);
      //if (!res) setError('Wir haben kein Konto mit diesen Informationen gefunden.');
      router.push('/admin/dashboard');
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Ein Fehler ist aufgetreten');
    } finally {
      setLoading(false);
    }
  };
  return (
    <form className={styles.formWrapper} style={{ maxWidth: 400 }} onSubmit={handleLogin}>
      <div className="column gap-m">
        <h3>Anmelden</h3>
        <InputText
          placeholder="E-Mail"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Password
          placeholder="Password"
          autoComplete="current-password"
          value={password}
          feedback={false}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="column">
          <Button
            className="button-primary small"
            label="Anmelden"
            disabled={!password || !email || loading}
            icon={loading ? 'pi pi-spinner' : undefined}
            type="submit"
          />
          {error && <small style={{ color: 'red' }}>{error}</small>}
        </div>
      </div>
    </form>
  );
}
