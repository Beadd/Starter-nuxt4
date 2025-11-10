export default async function (url: string) {
  if (!url) {
    return "";
  }
  if (url.startsWith("http")) {
    return url;
  } else if (url.includes(".")) {
    const supabase = useSupabaseClient();

    const { data } = await supabase.storage.from("avatars").download(url);

    if (data) {
      return URL.createObjectURL(data);
    } else {
      return "";
    }
  } else {
    return "";
  }
}
