import { useState } from "react";

import { NavLink } from "react-router";

import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

import { AnimatePresence, motion } from "framer-motion";

function DropdownMenuMobile({
  setSidebarOpen,
}: {
  setSidebarOpen: (value: boolean) => void;
}) {
  const [open, isOpen] = useState(false);

  return (
    <li className="group relative">
      <button
        className="flex w-full cursor-pointer items-center justify-between"
        onClick={() => isOpen(!open)}
      >
        Manga
        {open ? (
          <MdKeyboardArrowDown className="h-6 w-6" />
        ) : (
          <MdKeyboardArrowUp className="h-6 w-6" />
        )}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute z-20 mt-2 w-full origin-top space-y-2 bg-neutral-700"
          >
            <div className="space-y-1 px-3 py-2">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "block rounded-md bg-green-500 px-1.5 py-0.5"
                    : "block rounded-md px-1.5 py-0.5 transition-colors duration-300 hover:bg-green-500"
                }
                to="/top/manga"
                onClick={() => setSidebarOpen(false)}
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
                onClick={() => setSidebarOpen(false)}
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
                onClick={() => setSidebarOpen(false)}
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
                onClick={() => setSidebarOpen(false)}
              >
                Most Popular
              </NavLink>
              <NavLink
                className="block rounded-md px-1.5 py-0.5 focus:bg-green-500 active:bg-green-500"
                to="/top/favorite"
                onClick={() => setSidebarOpen(false)}
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

export default DropdownMenuMobile;
