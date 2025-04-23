import React, { useRef, useState, useLayoutEffect } from "react";

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
  const tabRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [widths, setWidths] = useState<number[]>([]);
  const [measured, setMeasured] = useState(false);

  useLayoutEffect(() => {
    const measuredWidths = tabs.map((_, i) => {
      const el = tabRefs.current[i];
      return el ? el.scrollWidth : 0;
    });
    setWidths(measuredWidths);
    setMeasured(true);
  }, [tabs]);

  return (
    <div className="flex flex-row gap-5 justify-center items-center">
      {tabs.map((tab, i) => (
        <div
          key={i}
          ref={(el) => {
            tabRefs.current[i] = el;
          }}
          onClick={animating ? () => {} : () => setTab(i)}
          className={`p-tab mix-blend-overlay p-noselect font-basement font-bold text-2xl md:text-4xl ${
            selectedTab === i ? "p-selected" : "cursor-pointer p-invert-hover"
          }`}
          style={
            measured
              ? {
                  maxWidth: selectedTab === i ? "0px" : widths[i] + "px",
                }
              : {}
          }
        >
          {tab}
        </div>
      ))}
    </div>
  );
}
