import { NavLink } from "react-router";

import { MdKeyboardArrowDown } from "react-icons/md";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

function DropdownMenuDesktop() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <li
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button className="flex cursor-pointer items-center space-x-1 transition-colors duration-300 hover:text-green-500">
        Manga
        <MdKeyboardArrowDown className="h-6 w-6" />
      </button>
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute z-20 w-60 origin-top bg-neutral-800"
          >
            <div className="space-y-1 px-3 py-2">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "block rounded-md bg-green-500 px-1.5 py-0.5"
                    : "block rounded-md px-1.5 py-0.5 transition-colors duration-300 hover:bg-green-500"
                }
                to="/top/manga"
              >
                Top Manga
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "block rounded-md bg-green-500 px-1.5 py-0.5"
                    : "block rounded-md px-1.5 py-0.5 transition-colors duration-300 hover:bg-green-500"
                }
                to="/top/publishing"
              >
                Top Publishing
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "block rounded-md bg-green-500 px-1.5 py-0.5"
                    : "block rounded-md px-1.5 py-0.5 transition-colors duration-300 hover:bg-green-500"
                }
                to="/top/upcoming"
              >
                Top Upcoming
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "block rounded-md bg-green-500 px-1.5 py-0.5"
                    : "block rounded-md px-1.5 py-0.5 transition-colors duration-300 hover:bg-green-500"
                }
                to="/top/bypopularity"
              >
                Most Popular
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "block rounded-md bg-green-500 px-1.5 py-0.5"
                    : "block rounded-md px-1.5 py-0.5 transition-colors duration-300 hover:bg-green-500"
                }
                to="/top/favorite"
              >
                Most Favorited
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

export default DropdownMenuDesktop;
