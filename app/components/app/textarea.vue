<script setup lang="ts">
const content = defineModel();
</script>

<template>
  <Textarea
    v-model="content"
    class="
      textarea! w-full! rounded-lg!
      placeholder:opacity-50!
    "
  />
</template>
