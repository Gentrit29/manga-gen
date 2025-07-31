import { useEffect } from "react";
import { useLocation } from "react-router";

type titleMapConfig = Record<string, string> | string;

export function useDocumentTitle(titleMap: titleMapConfig) {
  const { pathname } = useLocation();
  useEffect(() => {
    let title = "Manga GEN - All about manga & more";

    if (typeof titleMap === "string") {
      title = titleMap;
    } else if (typeof titleMap === "object") {
      title = titleMap[pathname] || title;
    }

    document.title = `${title} - Manga GEN`;
  }, [pathname, titleMap]);
}
