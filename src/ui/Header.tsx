import { NavLink } from "react-router";

import { IoLogoGithub, IoShieldOutline, IoSearch } from "react-icons/io5";

import DropdownMenu from "./DropdownMenu";

function Header() {
  return (
    <header className="z-10 h-20 bg-neutral-800">
      <nav className="flex h-full items-center space-x-10 px-20 text-white">
        <h1 className="cursor-pointer text-2xl font-bold">Manga GEN</h1>
        <ul className="flex space-x-4 text-lg font-light">
          <li className="transition-colors duration-300 hover:text-green-500">
            <NavLink to="/">Home</NavLink>
          </li>
          <DropdownMenu />
        </ul>
        <div className="ml-auto flex items-center space-x-4 text-lg font-light">
          <div className="flex items-center rounded-lg border-1 border-white px-2 py-0.5 focus-within:border-green-500">
            <input
              className="w-48 transition-all duration-300 outline-none placeholder:text-white focus:w-60"
              placeholder="Search for a manga..."
            />
            <IoSearch />
          </div>
          <div className="flex space-x-4">
            <button
              title="Enable NSFW"
              aria-label="Button to enable NSFW content"
              className="cursor-pointer text-green-500 transition-colors duration-300 hover:text-red-500"
            >
              <IoShieldOutline className="h-6 w-6" />
            </button>
            <a
              href="github.com/Gentrit29"
              target="_blank"
              aria-label="Go to github repository"
            >
              <IoLogoGithub className="h-6 w-6" />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
