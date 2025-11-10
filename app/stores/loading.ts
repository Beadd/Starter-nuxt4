export const useloadingstore = defineStore("loading", () => {
  const trigger = ref(false);

  return { trigger };
});
