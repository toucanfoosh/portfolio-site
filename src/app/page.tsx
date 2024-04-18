import NameHeader from "./components/nameheader";
import "./globals.css";

export default function Home() {
  return (
    <>
      <div className="p-background-gradient" />
      <div>
        <div className="pb-[40vh]" />
        <div className="flex w-[100vw] h-[100%] justify-center content-center">
          <NameHeader />
        </div>
      </div>
    </>
  );
}
