<script setup lang="ts">
import type Swiper from "swiper";

const model: Ref = defineModel();
const container: Ref<{ swiper?: Swiper } | null> = ref(null);

function onSlideChange(e: any) {
  model.value = e.detail[0].activeIndex;
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

onMounted(() => {
  container.value?.swiper?.slideTo(model.value);
});

watch(model, (value) => {
  container.value?.swiper?.slideTo(value);
});

useIntervalFn(() => {
  container.value?.swiper?.updateAutoHeight();
}, 300);
</script>

<template>
  <client-only>
    <swiper-container
      ref="container"
      :auto-height="true"
      @swiperslidechange="onSlideChange"
    >
      <slot />
    </swiper-container>
  </client-only>
</template>
