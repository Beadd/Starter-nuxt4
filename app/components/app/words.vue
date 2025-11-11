<script setup lang="ts">
defineProps<{
  words: string;
}>();

function formatnumber(num: number) {
  return num.toLocaleString("de-CH", { useGrouping: true }).replace(/\./g, "'");
}
</script>

<template>
  <span> {{ formatnumber(words.length) }}{{ $t("characters") }} </span>
</template>
