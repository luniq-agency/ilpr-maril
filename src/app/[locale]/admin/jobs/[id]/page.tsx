import { jobLoad } from '@/src/actions/jobs';
import AdminJobEditForm from '@/src/components/admin/AdminJobEditForm';

export default async function AdminJobEdit({ params }: { params: Promise<{ id: number }> }) {
  const { id } = await params;
  const job = await jobLoad(id);

  return (
    <main>
      <AdminJobEditForm job={job} />
    </main>
  );
}
