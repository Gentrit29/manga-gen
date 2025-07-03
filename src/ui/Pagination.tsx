import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";

type PaginationProps = {
  currentPage: number;
  firstPage?: number;
  lastPage: number;
  onPageChange: (page: number) => void;
};

function Pagination({
  currentPage,
  firstPage = 1,
  lastPage,
  onPageChange,
}: PaginationProps) {
  const start = Math.floor((currentPage - 1) / 2) * 2 + 1;
  const end = Math.min(start + 2, lastPage);

  const visiblePages = Array.from(
    { length: end - start + 1 },
    (_, i) => start + i,
  );

  return (
    <nav
      aria-label="Pagination"
      className="flex items-center justify-center space-x-2 rounded-md bg-neutral-900 p-3"
    >
      {currentPage > firstPage && (
        <button
          onClick={() => onPageChange(currentPage - 1)}
          className="rounded-md bg-green-600/70 px-3 py-1 text-white transition-colors hover:bg-green-500 disabled:cursor-not-allowed disabled:bg-green-800"
        >
          <MdOutlineKeyboardArrowLeft className="h-6 w-6" />
        </button>
      )}
      {visiblePages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`rounded-md px-3 py-1 font-semibold transition-colors ${
            page === currentPage
              ? "bg-green-500 text-white"
              : "bg-neutral-700 text-gray-200 hover:bg-green-600 hover:text-white"
          } `}
          aria-current={page === currentPage ? "page" : undefined}
        >
          {page}
        </button>
      ))}
      <span className="px-2 text-3xl text-gray-200 select-none">…</span>
      <button
        onClick={() =>
          onPageChange(currentPage === lastPage ? firstPage : lastPage)
        }
        className="rounded-md bg-neutral-700 px-3 py-1 font-semibold text-gray-200 hover:bg-green-600 hover:text-white"
      >
        {currentPage === lastPage ? firstPage : lastPage}
      </button>
      {currentPage < lastPage && (
        <button
          onClick={() => onPageChange(currentPage + 1)}
          className="rounded-md bg-green-600/70 px-3 py-1 text-white transition-colors hover:bg-green-500"
        >
          <MdOutlineKeyboardArrowRight className="h-6 w-6" />
        </button>
      )}
    </nav>
  );
}

export default Pagination;
