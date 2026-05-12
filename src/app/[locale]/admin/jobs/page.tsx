import { jobsLoadBackend } from '@/src/actions/jobs';
import styles from '@/src/components/admin/admin.module.css';
import { AdminAddJobButton } from '@/src/components/admin/AdminButtons';
import { AdminJobTable } from '@/src/components/admin/AdminTables';

export default async function AdminBlogPage() {
  const jobs = await jobsLoadBackend();

  return (
    <main>
      <div className="row justify-space-between">
        <h1 className={styles.h1}>Stellenausschreibungen</h1>
        <AdminAddJobButton />
      </div>
      <div className="spacer-m" />
      <AdminJobTable jobs={jobs} />
    </main>
  );
}
