"use client";

import React, { useEffect } from "react";
import Tabs from "./tabs";
import "./index.css";
import NameHeader from "./nameheader";
import { useState } from "react";
import About from "./about";
import Projects from "./projects";
import Music from "./music";

export default function Body(): React.ReactElement {
  const [tab, setTab] = useState(-1);
  const [oldTab, setOldTab] = useState(-1);
  const tabs = ["About", "Projects", "Music"];
  const [content, setContent] = useState<React.ReactElement>();
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    if (oldTab === tab) return;
    if (oldTab === -1) {
      setAnimating(true);
      setTimeout(() => {
        setAnimating(false);
      }, 2000);
      setContent(
        <div className="p-animate-slide-in-up">{getContent(tab)}</div>
      );
    } else if (oldTab !== -1 && tab === -1) {
      setAnimating(true);
      setTimeout(() => {
        setContent(<></>);
        setAnimating(false);
      }, 2000);
      setContent(
        <div className="p-animate-slide-out-down">{getContent(oldTab)}</div>
      );
    } else if (tab > oldTab) {
      setAnimating(true);
      setTimeout(() => {
        setAnimating(false);
      }, 2500);
      setTimeout(() => {
        setContent(
          <div className="p-animate-slide-in-right">{getContent(tab)}</div>
        );
      }, 1500);
      setContent(
        <div className="p-animate-slide-out-left">{getContent(oldTab)}</div>
      );
    } else if (tab < oldTab) {
      setAnimating(true);
      setTimeout(() => {
        setAnimating(false);
      }, 2500);
      setTimeout(() => {
        setContent(
          <div className="p-animate-slide-in-left">{getContent(tab)}</div>
        );
      }, 1500);
      setContent(
        <div className="p-animate-slide-out-right">{getContent(oldTab)}</div>
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab]);

  function getContent(tab: number) {
    switch (tab) {
      case -1:
        return <></>;
      case 0:
        return (
          <div className="w-[90vw] rounded-lg max-w-[50rem] pt-5">
            <About />
          </div>
        );
      case 1:
        return (
          <div className="w-[90vw] rounded-lg max-w-[75rem] pt-5">
            <Projects />
          </div>
        );
      case 2:
        return (
          <div className="w-[90vw] rounded-lg max-w-[50rem] pt-5">
            <Music />
          </div>
        );
      default:
        return (
          <div className="flex flex-col justify-center items-center w-[90vw] rounded-lg max-w-[50rem] p-5">
            <h1 className="text-7xl font-basement font-bold"> 404 </h1>
            <p className="text-2xl font-basement font-bold"> Page not found </p>
          </div>
        );
    }
  }

  function setNewTab(newTab: number) {
    if (tab === newTab) return;
    setOldTab(tab);
    setTab(newTab);
  }

  return (
    <>
      <div className={`p-top-gap ${tab === -1 ? `pb-[40vh]` : `pb-[3rem]`}`} />
      <NameHeader
        onClick={setNewTab}
        selectedTab={tab}
        homeIndex={-1}
        animating={animating}
      />
      <div className="flex flex-col justify-center items-center">
        <Tabs
          tabs={tabs}
          selectedTab={tab}
          setTab={setNewTab}
          animating={animating}
        />
        {content}
      </div>
    </>
  );
}
