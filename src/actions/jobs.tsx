'use server';

import { createClient } from '../supabase/server';
import type { Job } from '../types/Database';

export async function jobCreate(data: Partial<Job>) {
  const supabase = await createClient();

  const { data: created, error } = await supabase.from('job').insert(data).select().single();

  if (error) throw new Error(error.message);

  return created;
}

export async function jobsLoadFrontend(): Promise<Job[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('job')
    .select('*')
    .eq('organization', process.env.NEXT_PUBLIC_ORGANIZATION_ID)
    .eq('status', 'published');

  if (error) throw new Error(error.message);

  return data || [];
}

export async function jobsLoadBackend(): Promise<Job[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('job')
    .select('*')
    .eq('organization', process.env.NEXT_PUBLIC_ORGANIZATION_ID);

  if (error) throw new Error(error.message);

  return data || [];
}

export async function jobLoad(id: number) {
  const supabase = await createClient();

  const { data, error } = await supabase.from('job').select('*').eq('id', id).single();

  if (error) throw new Error(error.message);

  return data;
}

export async function jobLoadBySlug(slug: string) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('job')
    .select('*')
    .eq('slug', slug)
    .eq('organization', process.env.NEXT_PUBLIC_ORGANIZATION_ID)
    .single();

  if (error) throw new Error(error.message);

  return data;
}

export async function jobUpdate(id: number, data: Partial<Job>) {
  const supabase = await createClient();

  const { data: updated, error } = await supabase.from('job').update(data).eq('id', id).select();

  if (error) throw new Error(error.message);

  return updated;
}
