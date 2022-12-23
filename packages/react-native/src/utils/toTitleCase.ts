export function toTitleCase(str: string) {
  return str
    .toLowerCase()
    .replace(/(?:^|[\s-/])\w/g, (match: string) => match.toUpperCase())
    .replace(/-/g, '');
}