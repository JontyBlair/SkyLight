import { supabase } from "./supabase.mjs";

async function signin() {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: 'jontyb2121@gmail.com',
    password: '3bony_Arr0w',
  })

  return data;
}

export const userData = signin();