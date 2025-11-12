<script setup lang="ts">
const profiles = useprofilestore();
</script>

<template>
  <div v-if="profiles.item?.is_admin">
    <AppOpt @click="useRouter().push('/reports/posts')">
      <div class="text-warning flex items-center gap-2">
        <i class="bx bxs-flag-checkered" />
        {{ $t("Post reports") }}
      </div>
    </AppOpt>
    <AppOpt @click="useRouter().push('/reports/users')">
      <div class="text-warning flex items-center gap-2">
        <i class="bx bxs-user" />
        {{ $t("User reports") }}
      </div>
    </AppOpt>
    <AppOpt @click="useRouter().push('/admin')">
      <div class="text-warning flex items-center gap-2">
        <i class="bx bxs-dashboard" />
        {{ $t("Admin Interface") }}
      </div>
    </AppOpt>
  </div>
</template>
