<script setup lang="ts">
import { Capacitor } from "@capacitor/core";
</script>

<template>
  <AppOpt v-if="!Capacitor.isNativePlatform()" @click="useRouter().push(`app`)">
    <div class="flex items-center gap-2">
      <i class="bx bx-cloud-download" />
      {{ $t("Get the mobile app") }}
    </div>
  </AppOpt>
</template>
