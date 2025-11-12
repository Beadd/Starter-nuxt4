<script setup lang="ts">
const supabase = useSupabaseClient();

const bus = ref(0);

async function singout() {
  const { error } = await supabase.auth.signOut();
  if (!error)
    useRouter().push("/login");
}
</script>

<template>
  <AppOpt @click="bus++">
    <div class="text-error flex items-center gap-2">
      <i class="bx bx-exit" />
      {{ $t("Sign out") }}
    </div>
  </AppOpt>
  <AppDialog
    :bus="bus"
    :confirm="singout"
    :cancel="async () => {}"
    :content="$t('Confirm sign out')"
  />
</template>
