import AdminLoginForm from '@/src/components/admin/AdminLoginForm';
import styles from '@/src/components/admin/admin.module.css';

export default function AdminLogin() {
  return (
    <main className={styles.pageCentered}>
      <AdminLoginForm />
    </main>
  );
}
