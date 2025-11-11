<script setup lang="ts">
const props = defineProps<{
  path: string;
}>();

const button = ref(null);
const hovered = useElementHover(button);
const bus = ref(0);
const domain: string = import.meta.env.VITE_DOMAIN;
const link = ref(domain + props.path);

const icon = computed(() => [hovered.value ? "bg-info/30" : "opacity-70"]);

async function click() {
  bus.value++;

  await copy();
}

async function copy() {
  navigator.clipboard.writeText(link.value);
}
</script>

<template>
  <button
    ref="button"
    class="
      flex cursor-pointer items-center justify-center
      hover:text-info
    "
    @click.stop
    @click="click"
  >
    <i
      class="bx bxs-share rounded-full p-3 transition-all duration-200 ease-linear"
      :class="icon"
    />
  </button>
  <app-link :bus="bus" :link="link" />
</template>
