import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

import { useTopManga } from "../../hooks/useTopManga";

import { getTopLabel } from "../../utils/labels";
import { routeMap } from "../../utils/routing";

import TopHeaderSection from "./TopHeaderSection";
import TopContentSection from "./TopContentSection";
import { type Route } from "../../types/manga";

const tabs = [
  { label: "Manga", value: "manga" },
  { label: "Manhwa", value: "manhwa" },
  { label: "Manhua", value: "manhua" },
  { label: "Novel", value: "novel" },
  { label: "Light Novel", value: "lightnovel" },
];

function Top() {
  const { category } = useParams<{ category?: Route }>();
  const [nextPage, setNextPage] = useState(1);
  const [selectedTab, setSelectedTab] = useState("manga");
  const navigate = useNavigate();

  useEffect(() => {
    if (!category || !(category in routeMap)) {
      navigate("/top/manga", { replace: true });
    }
    setNextPage(1);
  }, [category, navigate]);

  const { isLoading, topManga } = useTopManga(
    category || "manga",
    nextPage,
    selectedTab,
  );

  const TOP_LABEL = getTopLabel(category, selectedTab);

  return (
    <div className="layout mt-15 space-y-20">
      <TopHeaderSection
        isLoading={isLoading}
        label={TOP_LABEL.label}
        desc={TOP_LABEL.desc}
        manga={topManga?.data}
      />
      <TopContentSection
        isLoading={isLoading}
        manga={topManga}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        setNextPage={setNextPage}
        tabs={tabs}
      />
    </div>
  );
}

export default Top;
