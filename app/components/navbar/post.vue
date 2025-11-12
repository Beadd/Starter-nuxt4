<script setup lang="ts">
const router = useRouter();
</script>

<template>
  <div class="flex p-3" @click="router.push({ path: '/posts' })">
    <i v-show="ispostspath()" class="bx bxs-color text-primary text-3xl" />
    <i v-show="!ispostspath()" class="bx bx-color text-primary text-3xl" />
  </div>
</template>
