'use server';

import { createClient } from '../supabase/server';
import type { BlogPost, News } from '../types/Database';

export async function postCreate(data: Partial<BlogPost>) {
  const supabase = await createClient();

  const { data: created, error } = await supabase.from('blog_post').insert(data).select().single();

  if (error) throw new Error(error.message);

  return created;
}

export async function postLoadBackend(id: string) {
  const supabase = await createClient();

  const { data, error } = await supabase.from('blog_post').select('*').eq('id', id).single();

  if (error) throw new Error(error.message);

  return data;
}

export async function postsLoadBackend(): Promise<BlogPost[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('blog_post')
    .select('*')
    .eq('organization', process.env.NEXT_PUBLIC_ORGANIZATION_ID);

  if (error) throw new Error(error.message);

  return data || [];
}

export async function postsLoadFrontend(): Promise<News[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('blog_post')
    .select('*')
    .eq('organization', process.env.NEXT_PUBLIC_ORGANIZATION_ID)
    .eq('status', 'published');

  if (error) throw new Error(error.message);

  return data || [];
}

export async function postUpdate(id: number, data: Partial<News>) {
  const supabase = await createClient();

  const { data: updated, error } = await supabase
    .from('blog_post')
    .update(data)
    .eq('id', id)
    .select()
    .single();

  if (error) throw new Error(error.message);

  return updated;
}
