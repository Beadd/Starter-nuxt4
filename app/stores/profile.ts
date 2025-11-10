export const useprofilestore = defineStore("profile", () => {
  const item = ref<typeprofile>();
  const report = ref<typeprofile[]>([]);

  const lists = [report];

  function ban(id: string) {
    const now = new Date().toISOString();
    lists.forEach((list) => {
      list.value = list.value.map(item => ({
        ...item,
        banned_at: item.id === id ? now : item.banned_at,
      }));
    });
  }

  function unban(id: string) {
    lists.forEach((list) => {
      list.value = list.value.map(item => ({
        ...item,
        banned_at: item.id === id ? null : item.banned_at,
      }));
    });
  }

  return { item, report, ban, unban };
});
