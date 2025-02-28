import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL as string;
const key = import.meta.env.VITE_SUPABASE_KEY as string;

const options ={
    db:{
        schema:'public',
    },
    auth:{
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true
    }
}
const supabase = createClient(url, key,options);

export default supabase;
