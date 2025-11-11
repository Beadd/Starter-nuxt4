<template>
  <Toast position="top-center" class="mt-st z-46">
    <template #container="{ message }">
      <div
        v-if="message.meta?.level === 'info'"
        class="alert alert-info rounded-lg"
      >
        <span>{{ message.detail }}</span>
      </div>
      <div
        v-if="message.meta?.level === 'success'"
        class="alert alert-success rounded-lg"
      >
        <span>{{ message.detail }}</span>
      </div>
      <div
        v-if="message.meta?.level === 'error'"
        class="alert alert-error rounded-lg"
      >
        <span>{{ message.detail }}</span>
      </div>
    </template>
  </Toast>
</template>
