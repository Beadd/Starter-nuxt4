<script setup lang="ts">
const router = useRouter();
const notifications = usenotificationstore();
</script>

<template>
  <div class="flex p-3" @click="router.push({ path: '/notifications' })">
    <div class="indicator">
      <i
        v-show="isnotificationspath()"
        class="bx bxs-bell text-primary text-3xl"
      />
      <i
        v-show="!isnotificationspath()"
        class="bx bx-bell text-primary text-3xl"
      />
      <client-only>
        <span
          v-show="notifications.number"
          class="badge badge-xs badge-error indicator-item"
        >
          {{ notifications.number }}
        </span>
      </client-only>
    </div>
  </div>
</template>
