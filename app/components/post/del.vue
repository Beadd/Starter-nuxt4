<script setup lang="ts">
const props = defineProps<{
  post: typepost;
}>();

const supabase = useSupabaseClient();
const toast = useToast();
const loading = useloadingstore();
const posts = usepoststore();
const { t } = useI18n();

async function confirm() {
  if (props.post?.id) {
    loading.trigger = true;
    const { error } = await supabase
      .from("posts")
      .update({ deleted_at: new Date().toISOString() })
      .match({ id: props.post.id });

    if (!error) {
      posts.del(props.post.id);

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
  <AppOptdel :confirm="confirm" />
</template>
