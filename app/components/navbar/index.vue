<script setup lang="ts">
defineProps<{
  dock?: boolean;
}>();
</script>

<template>
  <div
    class="
      pointer-events-none fixed z-40 flex min-h-dvh w-full items-center
      max-md:hidden
    "
  >
    <div
      class="border-neutral pointer-events-auto rounded-4xl rounded-l-none border-y border-r"
    >
      <AppMenu class="p-1!">
        <NavbarPost />
      </AppMenu>
      <AppMenu class="p-1!">
        <NavbarMine />
      </AppMenu>
      <AppMenu class="p-1!">
        <NavbarNotification />
      </AppMenu>
    </div>
  </div>
  <NavbarDock v-if="dock" />
  <slot />
</template>
