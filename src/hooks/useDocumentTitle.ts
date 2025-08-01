import { useEffect } from "react";
import { useLocation } from "react-router";

export function useDocumentTitle(title: string) {
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname === "/home") {
      document.title = "Manga GEN - All about manga & more.";
    } else {
      document.title = `${title} - Manga GEN`;
    }
  }, [pathname, title]);
}
