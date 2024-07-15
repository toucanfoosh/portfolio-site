import Image from "next/image";
import { Raleway } from "next/font/google";
import "../globals.css";
import { LuExternalLink } from "react-icons/lu";

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
});

interface ProjectProps {
  name: string;
  description: string;
  skills: string;
  image: string;
  imagedesc: string;
  caption: string;
  link: string;
  download?: string;
  downloadName?: string;
  downloadcaption?: string;
}

export default function Project({
  name,
  description,
  skills,
  image,
  imagedesc,
  caption,
  link,
  download,
  downloadName,
  downloadcaption,
}: ProjectProps): React.ReactElement {
  return (
    <div className="flex flex-col lg:flex-row justify-start items-center lg:items-start w-[100%] min-w-[20rem] m-3 p-2 bg-black/25 backdrop-blur rounded-lg">
      <div
        className="p-noselect flex flex-col items-center m-5 min-w-[256px] cursor-pointer rounded-lg justify-center hover:scale-105 transition-transform"
        onClick={() => window.open(link, "_blank")}
      >
        <Image
          src={image}
          alt={imagedesc}
          width="256"
          height="256"
          style={{
            borderRadius: "0.5rem",
          }}
        />
        <div
          className={`flex items-center ${raleway.className} text-gray-400 pt-1`}
        >
          <caption className="text-sm text-center pe-1">{`${caption}`}</caption>
          <LuExternalLink />
        </div>
      </div>
      <div className="flex flex-col flex-1 m-5 mt-0 lg:mt-5 justify-between lg:h-[256px]">
        <div>
          <h1 className="text-2xl font-basement font-bold pb-1">{name}</h1>
          <p className={`text-lg ${raleway.className}`}>{description}</p>
        </div>
        <div className="pt-8 font-basement font-bold text-lg">
          Skills Used: {`${skills}`}
        </div>
        {download && downloadName && downloadcaption && (
          <div
            className={`w-[16rem] h-[4rem] rounded-lg text-white bg-black/50 mt-4 flex items-center justify-center ${raleway.className} p-noselect cursor-pointer hover:bg-black/75 hover:scale-105 transition-all`}
          >
            <a
              href={download}
              download={downloadName}
              target="_blank"
              rel="noopener noreferrer"
            >
              {downloadcaption}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
