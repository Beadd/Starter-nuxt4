<script setup lang="ts">
defineProps<{
  count: number;
  title: string;
  desc?: string;
}>();
</script>

<template>
  <div class="stats shadow">
    <div class="stat">
      <div class="stat-title">
        {{ title }}
      </div>
      <div class="stat-value">
        {{ count }}
      </div>
      <div class="stat-desc">
        {{ desc }}
      </div>
    </div>
  </div>
</template>
