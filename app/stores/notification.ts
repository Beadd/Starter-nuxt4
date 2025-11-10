export const usenotificationstore = defineStore("notification", () => {
  const list = ref<typenotification[]>([]);
  const number = ref(0);

  return { list, number };
});
