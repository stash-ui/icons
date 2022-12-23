export function toTitleCase(str: string) {
  return str
    .toLowerCase()
    .replace(/(?:^|[\s-/])\w/g, function (match: string) {
      return match.toUpperCase();
    })
    .replace('-', '');
}
