<script setup lang="ts">
const route = useRoute();
const router = useRouter();
const supabase = useSupabaseClient();
const toast = useToast();
const { t } = useI18n();
const auth = useauthstore();

const email = route.query.email as string;
const value = ref("");
const el = ref<HTMLInputElement | null>(null);
const disabled = ref(false);

onMounted(() => {
  el.value?.focus();
});

watch(value, async (val) => {
  if (val.length === 6 && !disabled.value) {
    disabled.value = true;

    const { error } = await supabase.auth.verifyOtp({
      email,
      token: val,
      type: "email",
    });

    if (error) {
      disabled.value = false;
      value.value = "";
      setTimeout(() => {
        el.value?.focus();
      }, 3);

      showtoast(toast, t("Verification code error"), "error");
    } else {
      showtoastsuccess(toast, t);

      auth.lastemail = "";
      router.push("/");
    }
  }
});
</script>

<template>
  <div class="flex h-dvh flex-col items-center justify-center gap-4 p-4">
    <div class="flex w-full max-w-96 flex-col justify-center gap-4">
      <h1 class="text-4xl font-bold">
        {{ $t("Enter the verification code you received") }}
      </h1>
      <div class="flex gap-1">
        {{ email }}
        <span class="text-secondary underline" @click="router.push('/login')">
          {{ $t("Change email") }}
        </span>
      </div>
      <LoginResend />
      <InputOtp
        v-model="value"
        integer-only
        class="flex w-full justify-between gap-2"
        :length="6"
      >
        <template #default="{ attrs, events, index }">
          <input
            :ref="index === 1 ? 'el' : undefined"
            v-bind="attrs"
            type="text"
            :disabled="disabled"
            class="
              focus:border-primary focus:ring-2 focus:outline-none
              border-primary/70 aspect-square w-1/7 rounded-lg border text-center text-xl
              font-medium transition
              disabled:bg-primary/30 disabled:cursor-not-allowed
            "
            v-on="events"
          >
        </template>
      </InputOtp>
    </div>
  </div>
</template>
