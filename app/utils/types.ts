import type { Database } from "~/database.types";

type postrow = Database["public"]["Tables"]["posts"]["Row"];
type titlerow = Database["public"]["Tables"]["titles"]["Row"];
type profilerow = Database["public"]["Tables"]["profiles"]["Row"];
type timerrow = Database["public"]["Tables"]["timers"]["Row"];
type bookrow = Database["public"]["Tables"]["books"]["Row"];
type bookpointrow = Database["public"]["Tables"]["book_points"]["Row"];
type pointrow = Database["public"]["Tables"]["points"]["Row"];
type notificationrow = Database["public"]["Tables"]["notifications"]["Row"];
type postimagerow = Database["public"]["Tables"]["post_images"]["Row"];

export interface typeimage extends postimagerow {}
export interface typetitle extends titlerow {}

export interface typepost extends typesubs {
  subs?: typesubs[] | null;
}

export interface typeprofile extends profilerow {
  titles: titlerow[] | null | undefined;
  subs?: typesubs[] | null;
}

export interface typetimer extends timerrow {}

export interface typebook {
  id: string;
  name: string | null;
  likes: { count: number | null }[];
  user_id: string | null;
}

export interface typebookdetail extends bookrow {
  likes: { count: number | null }[];
  is_liked: { count: number | null }[];
  count: { count: number | null }[];
  subs?: typesubs[] | null;
}

export interface typebookpoint extends bookpointrow {
  points: typepoint | null;
}

export interface typepoint {
  id: string;
  name: string | null;
  description: string | null;
  user_id: string | null;
  likes: { count: number | null }[];
  posts: { count: number | null }[];
  is_liked: { count: number | null }[];
}

export interface typepointdetail extends pointrow {
  likes: { count: number | null }[];
  posts: { count: number | null }[];
  is_liked: { count: number | null }[];
}

export interface typesubs extends postrow {
  profiles: typeprofile | null;
  likes: { count: number | null }[];
  posts: { count: number | null }[];
  is_liked: { count: number | null }[];
  isnew?: boolean;
  post_images: postimagerow[];
}

export interface typenotification extends notificationrow {
  profiles: profilerow | null;
}
