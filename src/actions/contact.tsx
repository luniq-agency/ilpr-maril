'use server';

import { createClient } from '../supabase/server';
import type { ContactInquiry } from '../types/Database';

export async function inquiryCreate(data: Partial<ContactInquiry>) {
  const supabase = await createClient();

  const { data: created, error } = await supabase
    .from('contact_inquiry')
    .insert(data)
    .select()
    .single();

  console.log('Error:', JSON.stringify(error));
  console.log('Created:', created);

  if (error) throw new Error(error.message);

  return created;
}

export async function inquiriesLoad(): Promise<ContactInquiry[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('contact_inquiry')
    .select('*')
    .eq('organization', process.env.NEXT_PUBLIC_ORGANIZATION_ID);

  if (error) throw new Error(error.message);

  return data || [];
}

export async function inquiryLoad(id: number) {
  const supabase = await createClient();

  const { data, error } = await supabase.from('contact_inquiry').select('*').eq('id', id).single();

  if (error) throw new Error(error.message);

  return data;
}
