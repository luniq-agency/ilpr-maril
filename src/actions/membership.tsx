'use server';

import { createClient } from '../supabase/server';
import { Membership } from '../types/Database';

export async function membershipLookup(email: string): Promise<Membership> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('membership')
    .select('*')
    .eq('email', email)
    .eq('organization', process.env.NEXT_PUBLIC_ORGANIZATION_ID)
    .single();

  if (error) throw new Error(error.message);

  return data;
}
