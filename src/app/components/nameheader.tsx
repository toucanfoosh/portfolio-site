import React from "react";

interface NameHeaderProps {
  onClick: (index: number) => void;
  selectedTab: number;
  homeIndex: number;
  animating: boolean;
}

export default function NameHeader({
  onClick,
  selectedTab,
  homeIndex,
  animating,
}: NameHeaderProps): React.ReactElement {
  return (
    <div className="relative flex w-[100vw] justify-center items-center font-bold font-basement">
      <h1
        className={`${
          selectedTab != -1 && !animating ? `p-invert-hover cursor-pointer` : ``
        } overflow-hidden text-7xl z-10 relative mix-blend-overlay p-noselect pb-5`}
        onClick={animating ? () => {} : () => onClick(homeIndex)}
      >
        DANIEL WU
      </h1>
    </div>
  );
}
