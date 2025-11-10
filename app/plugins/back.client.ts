import { App } from "@capacitor/app";

export default defineNuxtPlugin((_) => {
  const router = useRouter();

  App.addListener("backButton", async () => {
    if (router.options.history.state.back) {
      router.back();
    } else {
      await App.minimizeApp();
    }
  });
});
