import { Link } from "react-router";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

import SkeletonGrid from "../../ui/SkeletonGrid";

import { useMangaGenres } from "../../hooks/useMangaGenres";

import GenresGrid from "../../ui/GenresGrid";

function MangaGenres() {
  const { isLoading, mangaGenres } = useMangaGenres();

  return (
    <section className="layout space-y-10">
      <div className="flex justify-center text-white">
        <h1 className="text-center text-2xl font-bold">
          Discover Manga by Genre!
        </h1>
      </div>
      {isLoading ? (
        <SkeletonGrid
          elements={18}
          gridClassName="grid grid-cols-2 gap-2 place-items-center sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6"
          itemClassName="w-30 rounded-sm p-3 transition-colors md:w-40"
        />
      ) : (
        <>
          <GenresGrid mangaGenres={mangaGenres!} />
          <div className="flex items-center justify-center">
            <Link
              to="/genres"
              className="flex w-fit cursor-pointer items-center rounded-sm bg-linear-to-r from-green-500 to-emerald-500 px-4 py-1 text-base font-bold text-gray-200 transition-all duration-300 hover:scale-105 md:text-lg"
            >
              View All
              <MdOutlineKeyboardDoubleArrowRight className="h-6 w-6" />
            </Link>
          </div>
        </>
      )}
    </section>
  );
}

export default MangaGenres;
