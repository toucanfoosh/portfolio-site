"use client";

import React from "react";
import Tabs from "./tabs";
import "./index.css";
import NameHeader from "./nameheader";
import { useState } from "react";

export default function Body(): React.ReactElement {
  const [tab, setTab] = React.useState(-1);
  const tabs = ["About", "Projects", "Music"];

  return (
    <>
      <NameHeader onClick={setTab} homeIndex={-1} />
      <div className="flex flex-col justify-center">
        <Tabs tabs={tabs} selectedTab={tab} setTab={setTab} />
        <div className="text-center">hi</div>
      </div>
    </>
  );
}
