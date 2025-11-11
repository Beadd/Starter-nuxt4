<script setup lang="ts">
defineProps<{
  load: () => Promise<void>;
}>();
const model = defineModel<string>();

const supabase = useSupabaseClient();
const user = useSupabaseUser();

const id = ref("");
const name = ref("");
const url = ref("");

if (user.value) {
  const { data } = await supabase
    .from("profiles")
    .select("id, avatar_url, name")
    .eq("id", user.value?.id || "")
    .single();

  id.value = data?.id || "";
  name.value = data?.name || "";
  url.value = data?.avatar_url || "";
}
</script>

<template>
  <div class="border-neutral flex flex-col gap-4 border-b p-4">
    <div class="flex gap-4">
      <div>
        <ProfileAvatar :id="id" :name="name" :url="url" />
      </div>
      <AppTextarea
        v-model="model"
        :placeholder="user ? $t('Comment content') : $t('Please log in first')"
        auto-resize
        rows="5"
        :disabled="!user"
      />
    </div>
    <div class="flex justify-end">
      <AppBtn :load="load" class="btn-primary px-6">
        {{ $t("Share") }}
      </AppBtn>
    </div>
  </div>
</template>
