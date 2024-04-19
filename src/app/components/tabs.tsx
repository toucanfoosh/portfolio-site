import "./index.css";

interface TabsProps {
  tabs: string[];
  selectedTab: number;
  setTab: (tab: number) => void;
}

export default function Tabs({
  tabs,
  selectedTab,
  setTab,
}: TabsProps): React.ReactElement {
  return (
    <div className="flex flex-row justify-center content-center">
      {tabs.map((tab, i) => {
        return (
          <div
            key={-i}
            className={`p-tab-container ${
              selectedTab === i ? "max-w-[0%]" : "max-w-[100%]"
            }`}
          >
            <div
              key={i}
              onClick={() => setTab(i)}
              className={`cursor-pointer p-noselect font-basement font-bold text-4xl mix-blend-overlay ${
                selectedTab === i
                  ? "p-tab-out opacity-0 mx-0 max-w-[0%]"
                  : "p-tab-in mx-5 max-w-[100%]"
              }`}
            >
              {tab}
            </div>
          </div>
        );
      })}
    </div>
  );
}
