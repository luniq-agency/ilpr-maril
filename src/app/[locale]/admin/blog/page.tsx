import { postsLoadBackend } from '@/src/actions/blog';
import styles from '@/src/components/admin/admin.module.css';
import { AdminAddBlogButton } from '@/src/components/admin/AdminButtons';
import { AdminBlogTable } from '@/src/components/admin/AdminTables';

export default async function AdminBlogPage() {
  const blogs = await postsLoadBackend();

  return (
    <main>
      <div className="row justify-space-between">
        <h1 className={styles.h1}>Blogbeiträge</h1>
        <AdminAddBlogButton />
      </div>
      <div className="spacer-m" />
      <AdminBlogTable blogs={blogs} />
    </main>
  );
}
