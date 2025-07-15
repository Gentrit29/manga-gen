export function formatNameForUrl(name: string) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

export function formatNameForDisplay(name: string) {
  return name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
