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
      <h1 className={`pt-5 text-md text-center ${secondaryFont.className}`}>
        <p className="text-xl mb-2">AFTER DARK by Daniel Wu</p>
        <p>1. Grand Ideals</p>
        <p>2. Delirium</p>
        <p>3. After Dark</p>
        <p>4. Evening Tides</p>
        <p>5. Something Greater</p>
        <p>6. Moon</p>
        <div
          className="m-3 p-4 bg-black/25 backdrop-blur rounded-lg hover:scale-105 transition-transform p-noselect cursor-pointer"
          onClick={() =>
            window.open(
              "https://distrokid.com/hyperfollow/danielwu1/after-dark",
              "_blank"
            )
          }
        >
          Available Now
        </div>
      </h1>
      {/* Add presave buttons or whatever */}
    </div>
  );
}
