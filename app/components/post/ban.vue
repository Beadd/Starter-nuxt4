<script setup lang="ts">
const props = defineProps<{
  id: string;
}>();

const supabase = useSupabaseClient();
const toast = useToast();
const loading = useloadingstore();
const posts = usepoststore();
const { t } = useI18n();

const bus = ref(0);

async function confirm() {
  if (props.id) {
    loading.trigger = true;
    const { error } = await supabase
      .from("posts")
      .update({ banned_at: new Date().toISOString() })
      .match({ id: props.id });

    if (!error) {
      posts.ban(props.id);

      loading.trigger = false;
      showtoastsuccess(toast, t);
    } else {
      loading.trigger = false;
      showtoasterror(toast, t);
    }
  }
}
</script>

<template>
  <div class="btn btn-warning" @click="bus++">
    {{ $t("Ban") }}
  </div>
  <AppDialog
    :bus="bus"
    :confirm="confirm"
    :cancel="async () => {}"
    :content="$t('Confirm ban')"
  />
</template>
