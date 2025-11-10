export const usepoststore = defineStore("post", () => {
  const image = ref<typeimage[]>([]);
  const profile = ref<typepost[]>([]);
  const report = ref<typepost[]>([]);

  const lists = [profile, report];

  function del(id: string) {
    lists.forEach((list) => {
      list.value = list.value
        .filter(post => post.id !== id)
        .map(post => ({
          ...post,
          subs: post.subs?.filter(sub => sub.id !== id),
        }));
    });
  }

  function ban(id: string) {
    const now = new Date().toISOString();
    lists.forEach((list) => {
      list.value = list.value.map(post => ({
        ...post,
        banned_at: post.id === id ? now : post.banned_at,
        subs: post.subs?.map(sub => ({
          ...sub,
          banned_at: sub.id === id ? now : sub.banned_at,
        })),
      }));
    });
  }

  function unban(id: string) {
    lists.forEach((list) => {
      list.value = list.value.map(post => ({
        ...post,
        banned_at: post.id === id ? null : post.banned_at,
        subs: post.subs?.map(sub => ({
          ...sub,
          banned_at: sub.id === id ? null : sub.banned_at,
        })),
      }));
    });
  }

  return {
    image,
    profile,
    report,
    del,
    ban,
    unban,
  };
});
