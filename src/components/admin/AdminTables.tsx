'use client';

import { DataTable, DataTableRowClickEvent } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { languages, statusOptions } from '@/src/constants/options';
import { BlogPost, ContactInquiry, Job } from '@/src/types/Database';
import { useRouter } from 'next/navigation';

interface Props {
  blogs?: BlogPost[];
  jobs?: Job[];
  request?: ContactInquiry[];
}

export function AdminBlogTable({ blogs }: Props) {
  const router = useRouter();

  const bodyTemplate = (rowData: BlogPost) => {
    const language = languages.find((t) => t.value === rowData.language);
    return <span>{language?.label ?? ''}</span>;
  };

  const selectRow = (e: DataTableRowClickEvent) => {
    const blog = e.data as BlogPost;
    router.push(`/admin/blog/${blog.id}`);
  };

  const statusTemplate = (rowData: BlogPost) => {
    const status = statusOptions.find((t) => t.value === rowData.status);
    return <span>{status?.label ?? ''}</span>;
  };

  return (
    <DataTable value={blogs} emptyMessage="Keine Blogbeiträge gefunden." onRowClick={selectRow}>
      <Column field="title" header="Name" />
      <Column body={bodyTemplate} field="language" header="Sprache" />
      <Column body={statusTemplate} field="status" header="Status" />
    </DataTable>
  );
}

export function AdminContactTable({ request }: Props) {
  const router = useRouter();

  const bodyTemplate = (rowData: Job) => {
    const language = languages.find((t) => t.value === rowData.language);
    return <span>{language?.label ?? ''}</span>;
  };

  const selectRow = (e: DataTableRowClickEvent) => {
    const blog = e.data as Job;
    router.push(`/admin/contact/${blog.id}`);
  };

  const statusTemplate = (rowData: Job) => {
    const status = statusOptions.find((t) => t.value === rowData.language);
    return <span>{status?.label ?? ''}</span>;
  };

  return (
    <DataTable
      value={request}
      emptyMessage="Keine Kontaktanfragen gefunden."
      onRowClick={selectRow}
    >
      <Column field="title" header="Name" />
      <Column body={bodyTemplate} field="language" header="Sprache" />
      <Column body={bodyTemplate} field="form" header="Kanal" />
      <Column body={statusTemplate} field="status" header="Datum" />
    </DataTable>
  );
}

export function AdminJobTable({ jobs }: Props) {
  const router = useRouter();

  const bodyTemplate = (rowData: Job) => {
    const language = languages.find((t) => t.value === rowData.language);
    return <span>{language?.label ?? ''}</span>;
  };

  const selectRow = (e: DataTableRowClickEvent) => {
    const blog = e.data as Job;
    router.push(`/admin/jobs/${blog.id}`);
  };

  const statusTemplate = (rowData: Job) => {
    const status = statusOptions.find((t) => t.value === rowData.language);
    return <span>{status?.label ?? ''}</span>;
  };

  return (
    <DataTable
      value={jobs}
      emptyMessage="Keine Stellenausschreibungen gefunden."
      onRowClick={selectRow}
    >
      <Column field="title" header="Name" />
      <Column body={bodyTemplate} field="language" header="Sprache" />
      <Column body={statusTemplate} field="status" header="Status" />
    </DataTable>
  );
}
