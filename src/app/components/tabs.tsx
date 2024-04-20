import "./index.css";

interface TabsProps {
  tabs: string[];
  selectedTab: number;
  setTab: (tab: number) => void;
  animating: boolean;
}

export default function Tabs({
  tabs,
  selectedTab,
  setTab,
  animating,
}: TabsProps): React.ReactElement {
  return (
    <div className="flex flex-row justify-center content-center pb-8">
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
              onClick={animating ? () => {} : () => setTab(i)}
              className={`${
                !animating ? `p-invert-hover cursor-pointer` : ``
              } mix-blend-overlay p-noselect font-basement font-bold text-4xl ${
                selectedTab === i ? "p-tab-out opacity-0 mx-0" : "p-tab-in mx-5"
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
