<script setup lang="ts">
defineProps<{
  post: typepost;
}>();
</script>

<template>
  <div class="flex w-full flex-col gap-1">
    {{ post?.content }}
    <PostGallery v-if="post?.post_images.length" :images="post.post_images" />
  </div>
</template>
