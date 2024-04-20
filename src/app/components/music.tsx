import Image from "next/image";
import { Nunito_Sans } from "next/font/google";

const nunitoSans = Nunito_Sans({
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
        }}
      />
      <h1 className={`pt-5 text-lg ${nunitoSans.className}`}>
        Something is coming...
      </h1>
    </div>
  );
}
