import { supabase } from "./supabase.mjs";
import { userData } from './signin.mjs';

async function retrieveData() {
    try {
        const ud = await userData();
        const uid = ud.user.id;

        const { data, error } = await supabase
            .from('userdata')
            .select()  
            .eq('uuid', uid);

        if (error) {
            console.error("Error fetching data:", error);
            return null;
        } else {
            return data;
        }
    } catch (error) {
        console.error("An error occurred:", error);
        return null;
    }
}

export { retrieveData as updateUser };
