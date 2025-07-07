const NAV_LABELS: Record<string, { label: string; desc: string }> = {
  manga: {
    label: "Top Manga",
    desc: `The highest-ranked {selectedTab} of all time`,
  },
  publishing: {
    label: "Top Publishing",
    desc: "Currently ongoing {selectedTab} series",
  },
  upcoming: {
    label: "Top Upcoming",
    desc: "Most anticipated {selectedTab}",
  },
  bypopularity: {
    label: "Most Popular",
    desc: "Most popular {selectedTab} by MyAnimeList community",
  },
  favorite: {
    label: "Most Favorited",
    desc: "Most favorite {selectedTab} by MyAnimeList community",
  },
};

export function getTopLabel(category?: string, selectedTab = "manga") {
  if (category && NAV_LABELS[category]) {
    const base = NAV_LABELS[category];
    return {
      label: `Top ${selectedTab.charAt(0).toUpperCase() + selectedTab.slice(1)}`,
      desc: base.desc.replace("{selectedTab}", selectedTab),
    };
  }

  return {
    label: "Top Manga",
    desc: `The highest-ranked {selectedTab} of all time`,
  };
}
