import { inquiriesLoad } from '@/src/actions/contact';
import { jobsLoadBackend } from '@/src/actions/jobs';
import styles from '@/src/components/admin/admin.module.css';
import { AdminAddJobButton } from '@/src/components/admin/AdminButtons';
import { AdminContactTable, AdminJobTable } from '@/src/components/admin/AdminTables';

export default async function AdminContactPage() {
  const requests = await inquiriesLoad();

  return (
    <main>
      <div className="row">
        <h1 className={styles.h1}>Kontaktanfragen</h1>
      </div>
      <div className="spacer-m" />
      <AdminContactTable request={requests} />
    </main>
  );
}
