import localFont from "next/font/local";
import Body from "./components/body";
import "./globals.css";

const basementGrotesque = localFont({
  src: "basement-grotesque/BasementGrotesque-Black.otf",
  variable: "--font-basement-grotesque",
});

export default function Home() {
  return (
    <>
      <div className="p-background-gradient -z-10" />
      <div className="p-site-container">
        <div
          className={`flex flex-col w-[100vw] h-[100%] ${basementGrotesque.variable}`}
        >
          <Body />
        </div>
      </div>
    </>
  );
}
