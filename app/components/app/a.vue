<script setup lang="ts">
import { Capacitor } from "@capacitor/core";

const props = defineProps<{
  url?: string;
}>();

async function click(e: MouseEvent) {
  if (!props.url)
    return;
  if (Capacitor.isNativePlatform()) {
    e.preventDefault();
    useRouter().push(props.url);
  }
}
</script>

<template>
  <component
    :is="props.url ? 'a' : 'span'"
    :href="props.url"
    target="_blank"
    @click="click"
  >
    <slot />
  </component>
</template>
