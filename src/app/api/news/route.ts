// app/api/articles/route.ts
import { NextResponse } from 'next/server';
import { ENDPOINTS } from '../endpoints';

export async function GET() {
  const res = await fetch(
    `${process.env.JETADMIN_API_URL}/${ENDPOINTS.BLOG}?organization__in=${process.env.ORGANIZATION_ID}&status__in=live`,
    {
      headers: {
        Authorization: `Bearer ${process.env.JETADMIN_API_KEY}`,
      },
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) return NextResponse.json({ error: 'Fehler beim Laden' }, { status: 500 });

  const data = await res.json();
  return NextResponse.json(data);
}
