import { NavLink } from "react-router";

import { IoLogoGithub, IoSearch } from "react-icons/io5";

import DropdownMenuDesktop from "./DropdownMenuDesktop";

function NavBarDesktop({
  onSearchClick,
}: {
  onSearchClick: (open: boolean) => void;
}) {
  return (
    <nav className="flex h-full items-center space-x-10 text-white">
      <h1 className="cursor-pointer text-2xl font-bold">Manga GEN</h1>
      <ul className="flex space-x-4 text-lg font-light">
        <li className="transition-colors duration-300 hover:text-green-500">
          <NavLink
            to="/home"
            className={({ isActive }) => (isActive ? "text-green-500" : "")}
          >
            Home
          </NavLink>
        </li>
        <DropdownMenuDesktop />
      </ul>
      <div className="ml-auto flex items-center space-x-4 text-lg font-light">
        <button
          className="ml-auto flex cursor-pointer items-center font-light"
          onClick={() => onSearchClick(true)}
          aria-label="Open search"
        >
          <IoSearch className="h-6 w-6" />
        </button>
        <a
          href="github.com/Gentrit29"
          target="_blank"
          aria-label="Go to github repository"
        >
          <IoLogoGithub className="h-6 w-6" />
        </a>
      </div>
    </nav>
  );
}

export default NavBarDesktop;
