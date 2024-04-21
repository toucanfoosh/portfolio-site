import Image from "next/image";
import { Nunito_Sans } from "next/font/google";
import "../globals.css";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
});

interface ProjectProps {
  name: string;
  description: string;
  skills: string;
  image: string;
  imagedesc: string;
  link: string;
}

export default function Project({
  name,
  description,
  skills,
  image,
  imagedesc,
  link,
}: ProjectProps): React.ReactElement {
  return (
    <div className="flex flex-col lg:flex-row justify-start items-center lg:items-start w-[100%] min-w-[20rem] m-3 p-2 bg-black/25 backdrop-blur rounded-lg">
      <div
        className="p-noselect flex m-5 min-w-[256px] cursor-pointer rounded-lg justify-center hover:scale-105 transition-transform"
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
      </div>
      <div className="flex flex-col flex-1 m-5 justify-between lg:h-[256px]">
        <div>
          <h1 className="text-2xl font-basement font-bold pb-1">{name}</h1>
          <p className={`text-lg ${nunitoSans.className}`}>{description}</p>
        </div>
        <div className="pt-8 font-basement font-bold text-lg">
          Skills Used: {`${skills}`}
        </div>
      </div>
    </div>
  );
}
