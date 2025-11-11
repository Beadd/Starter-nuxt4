<script setup lang="ts">
const loading = useloadingstore();
const supabase = useSupabaseClient();
const toast = useToast();
const { t } = useI18n();
const posts = usepoststore();

const files = ref();
const inputs = ref<HTMLElement>();

async function upload(evt: Event) {
  const target = evt.target as HTMLInputElement;
  files.value = target.files;

  if (!files.value || files.value.length === 0) {
    return;
  }

  if (posts.image.length >= 50) {
    showtoastratelimit(toast, t);
    return;
  }

  const file = files.value[0];
  const imageUrl = URL.createObjectURL(file);
  const img = new Image();
  img.src = imageUrl;

  img.onload = async () => {
    const width = img.width;
    const height = img.height;
    try {
      loading.trigger = true;

      const ext = file.name.split(".").pop();
      const path = `${uuid()}.${ext}`;

      const { error: uploadError } = await supabase.storage
        .from("posts")
        .upload(path, file);

      if (uploadError)
        throw uploadError;

      posts.image.push({
        id: 0,
        user_id: defaultuuid,
        post_id: "",
        created_at: "",
        link: path,
        width,
        height,
      });
    } finally {
      loading.trigger = false;
    }
  };
}
</script>

<template>
  <AppMenu class="p-2!" @click="inputs?.click()">
    <i class="bx bx-image-alt text-secondary text-2xl" />
  </AppMenu>
  <input
    ref="inputs"
    class="hidden"
    type="file"
    accept="image/*"
    @change="upload"
  >
</template>
