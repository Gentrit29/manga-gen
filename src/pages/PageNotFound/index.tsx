import { Link } from "react-router";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

function PageNotFound() {
  useDocumentTitle("404: Page Not Found");
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white md:text-6xl xl:text-8xl">
          404
        </h1>
        <p className="mt-4 text-2xl font-semibold text-gray-300">
          Page Not Found
        </p>
        <p className="mt-2 px-10 text-sm text-gray-400 md:px-0 md:text-base xl:text-lg">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link
          to="/home"
          className="mt-5 inline-block w-fit cursor-pointer rounded-sm bg-linear-to-r from-green-500 to-emerald-500 px-4 py-1 text-base font-bold text-gray-200 transition-all duration-300 hover:scale-105 md:mt-10 md:text-base xl:text-lg"
        >
          Home
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;
