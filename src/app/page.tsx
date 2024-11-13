"use client";
import { useEffect } from "react";
import posthog from "posthog-js";
import localFont from "next/font/local";
import Body from "./components/body";
import "./globals.css";
import Background from "./components/background";

const basementGrotesque = localFont({
  src: "basement-grotesque/BasementGrotesque-Black.otf",
  variable: "--font-basement-grotesque",
});

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined" && process.env.NEXT_PUBLIC_POSTHOG_KEY) {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
        api_host:
          process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com",
        person_profiles: "identified_only",
        loaded: (posthog) => {
          if (process.env.NODE_ENV === "development") posthog.debug();
        },
      });
    } else {
      console.warn("PostHog key is missing; analytics not initialized.");
    }
  }, []);

  return (
    <>
      {/* <div className="p-background-gradient -z-10" /> */}
      <Background />
      <div className="p-site-container pb-10">
        <div
          className={`flex flex-col w-[100vw] h-[100%] ${basementGrotesque.variable}`}
        >
          <Body />
        </div>
      </div>
    </>
  );
}
