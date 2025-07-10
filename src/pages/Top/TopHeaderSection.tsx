import type { MangaData } from "../../types/manga";

import TopHeader from "./TopHeader";
import TopHeaderSkeleton from "./TopHeaderSkeleton";

type TopHeaderSectionProps = {
  isLoading: boolean;
  label: string;
  desc: string;
  manga: MangaData[];
};

function TopHeaderSection({
  isLoading,
  label,
  desc,
  manga,
}: TopHeaderSectionProps) {
  if (isLoading) return <TopHeaderSkeleton />;
  return (
    <TopHeader
      label={label}
      desc={desc}
      params={manga[Math.floor(Math.random() * manga.length)]}
    />
  );
}

export default TopHeaderSection;
