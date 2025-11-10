import { Preferences } from "@capacitor/preferences";

export default defineNuxtPlugin(async (_) => {
  const supabase = useSupabaseClient();

  const { value } = await Preferences.get({ key: "supabase_session" });
  if (value) {
    console.warn("supabase_session restore");

    try {
      const session = JSON.parse(value);
      if (session?.access_token && session?.refresh_token) {
        await supabase.auth.setSession({
          access_token: session.access_token,
          refresh_token: session.refresh_token,
        });
      }
    } catch (e) {
      console.error("auth supabase error:", e);
    }
  }

  supabase.auth.onAuthStateChange(async (_, session) => {
    if (session) {
      console.warn("supabase_session set");

      await Preferences.set({
        key: "supabase_session",
        value: JSON.stringify(session),
      });
    } else {
      await Preferences.remove({ key: "supabase_session" });
    }
  });
});
