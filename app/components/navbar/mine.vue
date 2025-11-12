<template>
  <div class="flex p-3" @click="useRouter().push({ path: '/mine' })">
    <i v-show="isminepath()" class="bx bxs-user-circle text-primary text-3xl" />
    <i v-show="!isminepath()" class="bx bx-user-circle text-primary text-3xl" />
  </div>
</template>
