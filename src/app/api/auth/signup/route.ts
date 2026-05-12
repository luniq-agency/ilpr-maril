import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/src/supabase/server';

export async function POST(request: NextRequest) {
  console.log('SUPABASE_URL:', process.env.NEXT_PUBLIC_SUPABASE_URL);
  console.log('SUPABASE_KEY:', !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
  const { email, password } = await request.json();
  const supabase = await createClient();

  const { data, error } = await supabase.auth.signUp({ email, password });
  console.log('SignUp Data:', data);
  console.log('SignUp Error:', error);
  if (error) return NextResponse.json({ error: error.message }, { status: 400 });
  return NextResponse.json(data, { status: 201 });
}
