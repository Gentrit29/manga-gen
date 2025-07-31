import { Outlet } from "react-router";

import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

function AppLayout() {
  useDocumentTitle({
    "/top/manga": "Top Manga",
    "/top/publishing": "Top Publishing",
    "/top/upcoming": "Top Upcoming",
    "/top/bypopularity": "Most Popular",
    "/top/favorite": "Most Favorited",
    "/genres": "All Genres",
  });

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
