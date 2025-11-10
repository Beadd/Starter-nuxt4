export const useauthstore = defineStore(
  "auth",
  () => {
    const counter = ref(0);
    const lastemail = ref("");
    const lasttime = ref(0);
    const agreed = ref(false);

    const { pause, resume } = useIntervalFn(
      () => {
        counter.value--;
        if (counter.value <= 0) {
          pause();
        }
      },
      1000,
      { immediate: false },
    );

    function begin() {
      counter.value = 60;
      resume();
    }

    return { counter, resume, lastemail, lasttime, begin, agreed };
  },
  { persist: true },
);
