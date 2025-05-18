"use client";

import React, { useEffect, useState } from "react";
import Tabs from "./tabs/tabs";
import "./index.css";
import NameHeader from "./tabs/nameheader";
// import About from "./pages/general/about";
// import Projects from "./pages/cs/projects";
import AfterDark from "./pages/music/AfterDark";
import Footer from "./footer/footer";

export default function Body(): React.ReactElement {
  const [tab, setTab] = useState(0);
  const [oldTab, setOldTab] = useState(0);
  const [firstLoad, setFirstLoad] = useState(true);
  const [content, setContent] = useState<React.ReactElement>(getContent(0));
  const [animating, setAnimating] = useState(false);
  const tabs = ["AFTER DARK"];

  useEffect(() => {
    if (firstLoad) {
      setFirstLoad(false);
      return;
    }

    if (oldTab === tab) return;

    if (oldTab === -1) {
      setAnimating(true);
      setTimeout(() => setAnimating(false), 2000);
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
      setTimeout(() => setAnimating(false), 1000);
      setTimeout(() => {
        setContent(
          <div className="p-animate-slide-in-right">{getContent(tab)}</div>
        );
      }, 1000);
      setContent(
        <div className="p-animate-slide-out-left">{getContent(oldTab)}</div>
      );
    } else if (tab < oldTab) {
      setAnimating(true);
      setTimeout(() => setAnimating(false), 1000);
      setTimeout(() => {
        setContent(
          <div className="p-animate-slide-in-left">{getContent(tab)}</div>
        );
      }, 1000);
      setContent(
        <div className="p-animate-slide-out-right">{getContent(oldTab)}</div>
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab]);

  function getContent(tabIndex: number) {
    switch (tabIndex) {
      case -1:
        return <></>;
      case 0:
        return (
          <div className="w-[90vw] rounded-lg max-w-[50rem] pt-5">
            <AfterDark />
          </div>
        );
      default:
        return (
          <div className="flex flex-col justify-center items-center w-[90vw] rounded-lg max-w-[50rem] p-5">
            <h1 className="text-7xl font-basement font-bold">404</h1>
            <p className="text-2xl font-basement font-bold">Page not found</p>
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
      <Footer />
    </>
  );
}
