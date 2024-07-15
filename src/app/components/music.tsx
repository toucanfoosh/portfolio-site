import Image from "next/image";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
});

export default function Music(): React.ReactElement {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image
        src={"/images/albumcover.png"}
        alt="Something is coming..."
        width="256"
        height="256"
        style={{
          borderRadius: "0.5rem",
          userSelect: "none",
        }}
      />
      <h1 className={`pt-5 text-lg ${raleway.className}`}>
        Something is coming...
      </h1>
    </div>
  );
}
