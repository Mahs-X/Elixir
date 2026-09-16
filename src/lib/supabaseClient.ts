import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  "https://zkhlqifadcdqiterenui.supabase.co";
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpraGxxaWZhZGNkcWl0ZXJlbnVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ5OTUxMzcsImV4cCI6MjEwMDU3MTEzN30.v-xWPfDzamXDkgzM6Z0tEQZ3da4NjntKdtXc8iYXUII";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
