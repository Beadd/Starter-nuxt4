import { defineNuxtPlugin } from "#app";
import { App } from "@capacitor/app";
import { Clipboard } from "@capacitor/clipboard";

export default defineNuxtPlugin((nuxtApp) => {
  const plugins = usepluginstore();

  const checkClipboard = async () => {
    try {
      console.warn("clipboard check");
      const { value } = await Clipboard.read();

      if (!value)
        return;

      const postRegex = /^https:\/\/www\.isuishu\.com\/posts\/([a-z0-9-]+)$/i;
      const bookRegex = /^https:\/\/www\.isuishu\.com\/books\/([a-z0-9-]+)$/i;

      let targetPath: string | null = null;

      if (postRegex.test(value)) {
        const id = value.match(postRegex)?.[1];
        targetPath = `/posts/${id}`;
      } else if (bookRegex.test(value)) {
        const id = value.match(bookRegex)?.[1];
        targetPath = `/books/${id}`;
      }

      if (targetPath && targetPath !== plugins.clipboard.ignore) {
        plugins.clipboard.link = targetPath || "";
        plugins.clipboard.bus++;
      }
    } catch (err) {
      console.error("clipboard error:", err);
    }
  };
  nuxtApp.hook("app:mounted", checkClipboard);

  App.addListener("resume", checkClipboard);
});
