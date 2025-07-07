export function formatGenreNameForUrl(name: string) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

export function formatGenreNameForDisplay(name: string) {
  return name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
