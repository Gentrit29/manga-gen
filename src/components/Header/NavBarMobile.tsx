import { useEffect, useState } from "react";
import { NavLink } from "react-router";

import { IoLogoGithub, IoSearch } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

import DropdownMenuMobile from "./DropdownMenuMobile";

import { AnimatePresence, motion } from "framer-motion";

function NavBarMobile({
  onSearchClick,
}: {
  onSearchClick: (open: boolean) => void;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [sidebarOpen]);

  return (
    <>
      <nav className="relative flex h-full items-center space-x-10 text-white">
        <h1 className="cursor-pointer text-2xl font-bold">Manga GEN</h1>
        <div className="ml-auto flex items-center space-x-4 text-lg font-light">
          <button
            className="ml-auto flex cursor-pointer items-center font-light"
            onClick={() => onSearchClick(true)}
            aria-label="Open search"
          >
            <IoSearch className="h-6 w-6" />
          </button>
          <button onClick={() => setSidebarOpen(true)}>
            <RxHamburgerMenu className="h-6 w-6" />
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50"
            onClick={() => setSidebarOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="top-0 left-0 z-50 flex h-full w-3/4 flex-col bg-neutral-800 p-4 text-white sm:w-3/4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold">Manga GEN</h2>
                <button
                  onClick={() => setSidebarOpen(false)}
                  aria-label="Close menu"
                  className="rounded p-1 hover:text-green-500 focus:ring-2 focus:ring-green-500 focus:outline-none"
                >
                  <IoCloseOutline className="h-6 w-6" />
                </button>
              </div>
              <ul className="flex-grow space-y-4 text-lg font-light">
                <li>
                  <NavLink
                    to="/home"
                    className={({ isActive }) =>
                      isActive ? "text-green-500" : ""
                    }
                    onClick={() => setSidebarOpen(false)}
                  >
                    Home
                  </NavLink>
                </li>
                <DropdownMenuMobile />
              </ul>
              <div className="mt-auto">
                <a
                  href="https://github.com/Gentrit29"
                  target="_blank"
                  aria-label="Go to github repository"
                  className="flex items-center space-x-2 text-lg"
                >
                  <IoLogoGithub className="h-6 w-6" />
                  <span>GitHub</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default NavBarMobile;
