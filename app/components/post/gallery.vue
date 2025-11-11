<script setup lang="ts">
const props = defineProps<{
  images: typeimage[];
}>();

const supabase = useSupabaseClient();

const container = ref<HTMLElement | null>(null);

function resize(image: typeimage) {
  if (!image.width || !image.height)
    return;

  const ratio = image.width / image.height;
  let width = image.width;
  let height = image.height;

  if (image.width > image.height) {
    height = props.images?.length === 1 ? 500 : 250;
    width = Math.round(height * ratio);
  } else {
    width = props.images?.length === 1 ? 500 : 250;
    height = Math.round(width * ratio);
  }

  return { width, height };
}

function getimage(image: typeimage, ifresize?: boolean) {
  const _transform = ifresize ? resize(image) : undefined;

  const { data } = supabase.storage
    .from("posts")
    .getPublicUrl(image.link || "", {
      // transform: transform
      //   ? {
      //       width: transform.width,
      //       height: transform.height,
      //     }
      //   : undefined,
    });
  return data.publicUrl;
}

const images = computed(() => {
  return props.images?.map((item) => {
    return {
      largeurl: getimage(item),
      thumbnailurl: getimage(item, true),
      width: item.width || 0,
      height: item.height || 0,
    };
  });
});
</script>

<template>
  <div v-if="images" ref="container">
    <app-gallery galleryid="my-test-gallery" :images="images" />
  </div>
</template>
