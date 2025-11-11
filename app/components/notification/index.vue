<script setup lang="ts">
const props = defineProps<{
  notification: typenotification;
}>();

const supabase = useSupabaseClient();
const { t } = useI18n();

const notif = getnotifications(props.notification, t);

async function click() {
  if (props.notification.link) {
    if (props.notification.is_read) {
      useRouter().push(props.notification.link);
      return;
    }

    const { error } = await supabase
      .from("notifications")
      .update({
        is_read: true,
      })
      .match({
        id: props.notification.id,
      });

    if (!error) {
      useRouter().push(props.notification.link);
    }
  }
}
</script>

<template>
  <div
    class="border-neutral flex gap-4 border-b p-4"
    :class="notification.is_read ? '' : `bg-secondary/10`"
    @click="click"
  >
    <NotificationAvatar
      :notification="notification"
      :severity="notif.severity"
    />
    <div class="flex w-full flex-col">
      <div class="flex w-full justify-between">
        <div class="flex text-lg font-bold">
          {{ notif.title }}
        </div>
        <AppDate :date="notification.created_at" />
      </div>
      <div class="text-sm">
        {{ notif.content }}
      </div>
    </div>
  </div>
</template>
