type Tab = {
  label: string;
  value: string;
};

type MangaTabsProps = {
  tabs: Tab[];
  selectedTab: string;
  onSelectTab: (tab: string) => void;
};

function MangaTabs({ tabs, selectedTab, onSelectTab }: MangaTabsProps) {
  return (
    <>
      <div className="mt-4 hidden space-x-6 border-b-1 border-gray-200 text-xl text-white md:flex">
        {tabs.map((tab) => (
          <button
            className={`pb-2 transition-all ${
              selectedTab === tab.value
                ? "border-b-1 border-gray-200 text-white"
                : "hover: border-gray-200 text-gray-400 hover:border-b-1 hover:text-white"
            }`}
            key={tab.value}
            onClick={() => onSelectTab(tab.value)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="w-full md:hidden">
        <select className="mt-3 w-full rounded-sm border-1 border-gray-400 text-lg text-white">
          {tabs.map((tab) => (
            <option
              className="bg-neutral-900"
              key={tab.value}
              onClick={() => onSelectTab(tab.value)}
            >
              {tab.label}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

export default MangaTabs;
