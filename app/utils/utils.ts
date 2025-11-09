export function oneline(str: string): string {
  return str.replace(/\s*\n\s*/g, "").trim();
}
