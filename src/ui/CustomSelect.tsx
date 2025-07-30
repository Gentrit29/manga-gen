import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

import type { Route } from "../types/manga";

type Tab = {
  label: string;
  value: string;
};

type CustomSelectProps = {
  tabs: Tab[];
  selectedTab: string;
  onSelectTab: (tab: Route) => void;
};

function CustomSelect({ selectedTab, tabs, onSelectTab }: CustomSelectProps) {
  const [open, setOpen] = useState(false);

  const label = tabs.find((tab) => tab.value === selectedTab)?.label;

  return (
    <div className="relative w-full">
      <button
        className="mt-3 flex w-full items-center justify-between rounded-sm border-1 border-gray-400 px-2 py-0.5 text-lg text-white"
        onClick={() => setOpen(!open)}
      >
        {label}
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
            className="absolute z-20 mt-1 w-full origin-top space-y-1 rounded border-1 border-gray-400 bg-neutral-900 px-2 py-1 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            {tabs.map((tab) => (
              <div
                key={tab.value}
                onClick={() => {
                  onSelectTab(tab.value as Route);
                  setOpen(false);
                }}
                className={`px-2 py-1 ${selectedTab === tab.value ? "block rounded-md bg-green-500" : "block rounded-md transition-colors duration-300 hover:bg-green-500"}`}
              >
                {tab.label}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default CustomSelect;
