import React from "react";

interface NameHeaderProps {
  onClick: (index: number) => void;
  homeIndex: number;
}

export default function NameHeader({
  onClick,
  homeIndex,
}: NameHeaderProps): React.ReactElement {
  return (
    <div className="relative flex w-[100vw] h-[100%] justify-center items-center font-bold font-basement">
      <h1
        className="overflow-hidden text-7xl z-10 relative mix-blend-overlay p-noselect pb-5"
        onClick={() => onClick(homeIndex)}
      >
        DANIEL WU
      </h1>
    </div>
  );
}
