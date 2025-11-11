<script lang="ts" setup>
defineProps<{
  tabs: string[];
}>();
const model = defineModel();
</script>

<template>
  <div
    class="border-neutral z-20 flex items-center justify-between border-b backdrop-blur-xl"
  >
    <button
      v-for="(tab, index) in tabs"
      :key="index"
      class="
        hover:bg-neutral/50 hover:transition-all hover:duration-300 hover:ease-linear
        relative h-14 flex-1 text-base
      "
      :class="[{ 'font-bold': index === model }]"
      @click="model = index"
    >
      {{ tab }}
      <div
        :class="[{ 'w-14': index === model }]"
        :style="{ opacity: index === model ? 1 : 0 }"
        class="bg-secondary absolute bottom-0 left-1/2 h-1 -translate-x-1/2 transform rounded-full"
      />
    </button>
  </div>
</template>
