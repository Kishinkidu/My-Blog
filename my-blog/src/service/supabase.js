import { createClient } from '@supabase/supabase-js'
//para conectarnos a superbase vamos a requerir 2 variable
const url = "https://yszsuquubsceklebbznp.supabase.co";
const publicKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlzenN1cXV1YnNjZWtsZWJiem5wIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODExNzk5MTEsImV4cCI6MTk5Njc1NTkxMX0.DfAVGX4zuz01T6EZ10qV0ejW0AgnxLeOSYvU_TtFIrQ";

const supabase = createClient(url, publicKey);

//funcion para crear una cuenta
export async function signUp(user) {
    const { data, error } = await supabase.auth.signUp(user);

    if (error) {
        console.log("error", error);
        return {
            ok: false,
            error,
        };
    }
    return {
        ok: true,
        data,
    };
}


//funcion para iniciar session
export async function signIn(user) {
    const { data, error } = await supabase.auth.signInWithPassword(user);
    if (error) {
        console.log("error", error);
        return {
            ok: false,
            error,
        };
    }
    return {
        ok: true,
        data,
    };
}


export async function getCurrentUser() {
    const { data } = await supabase.auth.getUser();

    return data.user;
}

export async function updateUser(user) {
    const { data, error } = await supabase.auth.updateUser({
        data: user,
    });
    if (error) {
        console.log(error)
        return;
    }
    return data;
}
export async function signInWithGithub() {
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "github",
    });

    if (error) {
        console.log(error);
        return;
    }

    return data;
}