"use client";

interface Tab {
  label: string;
  value: string;
}

interface CategoryTabsProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (value: string) => void;
}

export default function CategoryTabs({
  tabs,
  activeTab,
  onTabChange,
}: CategoryTabsProps) {
  return (
    <div className="w-full overflow-x-auto scrollbar-none">
      <div className="flex items-center gap-1 bg-white/10 rounded-lg p-1 w-max mx-auto">
        {tabs.map((tab) => {
          const isActive = tab.value === activeTab;
          return (
            <button
              key={tab.value}
              onClick={() => onTabChange(tab.value)}
              className={`whitespace-nowrap px-5 py-2.5 text-sm font-medium rounded-md transition-all duration-200 ${
                isActive
                  ? "bg-[#ff5a1f] text-black"
                  : "text-white/70 hover:text-white hover:bg-white/5"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
