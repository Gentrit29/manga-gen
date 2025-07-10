import { NavLink } from "react-router";

import { MdKeyboardArrowDown } from "react-icons/md";

function DropdownMenu() {
  return (
    <li className="group relative">
      <button className="flex cursor-pointer items-center space-x-1 transition-colors duration-300 hover:text-green-500">
        Manga
        <MdKeyboardArrowDown className="h-6 w-6" />
      </button>
      <div className="absolute z-20 hidden w-60 space-y-2 bg-neutral-800 group-hover:block">
        <div className="px-3 py-2">
          <NavLink
            className="block rounded-md px-1.5 py-0.5 transition-colors duration-300 hover:bg-green-500"
            to="/top/manga"
          >
            Top Manga
          </NavLink>
          <NavLink
            className="block rounded-md px-1.5 py-0.5 transition-colors duration-300 hover:bg-green-500"
            to="/top/publishing"
          >
            Top Publishing
          </NavLink>
          <NavLink
            className="block rounded-md px-1.5 py-0.5 transition-colors duration-300 hover:bg-green-500"
            to="/top/upcoming"
          >
            Top Upcoming
          </NavLink>
          <NavLink
            className="block rounded-md px-1.5 py-0.5 transition-colors duration-300 hover:bg-green-500"
            to="/top/bypopularity"
          >
            Most Popular
          </NavLink>
          <NavLink
            className="block rounded-md px-1.5 py-0.5 transition-colors duration-300 hover:bg-green-500"
            to="/top/favorite"
          >
            Most Favorited
          </NavLink>
        </div>
      </div>
    </li>
  );
}

export default DropdownMenu;
