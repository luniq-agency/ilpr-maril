// app/api/articles/[slug]/route.ts
import { NextResponse } from 'next/server';
import { ENDPOINTS } from '../../endpoints';

export async function GET(_req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const res = await fetch(`${process.env.JETADMIN_API_URL}/${ENDPOINTS.BLOG}?slug__in=${slug}`, {
    headers: {
      Authorization: `Bearer ${process.env.JETADMIN_API_KEY}`,
    },
    next: { revalidate: 60 },
  });

  if (res.status === 404) return NextResponse.json({ error: 'Nicht gefunden' }, { status: 404 });
  if (!res.ok) return NextResponse.json({ error: 'Fehler beim Laden' }, { status: 500 });

  const data = await res.json();
  return NextResponse.json(data);
}
