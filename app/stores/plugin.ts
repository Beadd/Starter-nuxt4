export const usepluginstore = defineStore("plugin", () => {
  const clipboard = ref({
    bus: 0,
    link: "",
    ignore: "",
  });

  return { clipboard };
});
