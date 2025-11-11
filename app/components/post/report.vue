<script setup lang="ts">
const props = defineProps<{
  post: typepost;
}>();

const supabase = useSupabaseClient();
const toast = useToast();
const loading = useloadingstore();
const { t } = useI18n();

const content = ref("");

async function confirm() {
  if (props.post?.id) {
    loading.trigger = true;
    const { error } = await supabase.from("posts").insert({
      content: content.value,
      post_id: props.post.id,
      is_report: true,
    });

    if (!error) {
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
  <AppOptreport v-model="content" :confirm="confirm" />
</template>
