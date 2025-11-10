import { App } from "@capacitor/app";
import { Browser } from "@capacitor/browser";

export default defineNuxtPlugin((nuxtApp) => {
  const supabase = useSupabaseClient();
  const router = useRouter();
  const toast = useToast();
  const loading = useloadingstore();
  const $t = nuxtApp.vueApp.config.globalProperties.$t;

  App.addListener("appUrlOpen", async ({ url }) => {
    if (url?.startsWith(import.meta.env.VITE_AUTH_REDIRECT_URL_NATIVE)) {
      const params = new URLSearchParams(url.split("?")[1]);
      const code = params.get("code");

      await Browser.close();

      loading.trigger = true;

      const { error } = await supabase.auth.exchangeCodeForSession(code || "");
      if (error) {
        showtoasterror(toast, $t);
      }

      loading.trigger = false;

      router.replace("/");
    }
  });
});
