import { supabase } from "./supabase.mjs";
import { userData } from './signin.mjs';

async function retrieveData() {
    const ud = await userData;
    const uid = ud.user.id;

    const { data, error } = await supabase
    .from('userdata')
    .select()  
    .eq('uuid', uid)

    console.log(data);
    return data;
}

export const updateUser = retrieveData();