import { AdminLayoutClient } from '../../../components/ConditionalLayout';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <AdminLayoutClient>{children}</AdminLayoutClient>;
}
