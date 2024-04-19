import NameHeader from "./components/nameheader";
import localFont from "next/font/local";
import "./globals.css";
import Body from "./components/body";

const basementGrotesque = localFont({
  src: "../../public/fonts/basement-grotesque/BasementGrotesque-Black.otf",
  variable: "--font-basement-grotesque",
});

export default function Home() {
  return (
    <>
      <div className="p-background-gradient -z-10" />
      <div>
        <div className="pb-[40vh]" />
        <div className="flex flex-col w-[100vw] h-[100%] justify-center content-center">
          <Body />
        </div>
      </div>
    </>
  );
}
