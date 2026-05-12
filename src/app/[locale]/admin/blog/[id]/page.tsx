import { postLoadBackend } from '@/src/actions/blog';
import AdminBlogEditForm from '@/src/components/admin/AdminBlogEditForm';

export default async function AdminBlogEdit({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const blogPost = await postLoadBackend(id);

  return (
    <main>
      <AdminBlogEditForm blog={blogPost} />
    </main>
  );
}
