import Image from "next/image";
import { secondaryFont } from "../../../fonts/fonts";

export default function AfterDark(): React.ReactElement {
  return (
    <div className="flex flex-col justify-center items-center mb-12">
      <Image
        src={"/images/afterdark.png"}
        alt="Album cover for AFTER DARK"
        width="256"
        height="256"
        style={{
          borderRadius: "0.5rem",
          userSelect: "none",
        }}
      />
      <h1 className={`pt-5 text-lg text-center ${secondaryFont.className}`}>
        <p>AFTER DARK by Daniel Wu</p>
        <p>Out everywhere May 4th</p>
        <div
          className="m-3 p-4 bg-black/25 backdrop-blur rounded-lg hover:scale-105 transition-transform p-noselect cursor-pointer"
          onClick={() =>
            window.open(
              "https://distrokid.com/hyperfollow/danielwu1/after-dark",
              "_blank"
            )
          }
        >
          Click here to pre-save
        </div>
      </h1>
    </div>
  );
}
