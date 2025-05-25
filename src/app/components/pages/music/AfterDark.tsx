import React from "react";
import Image from "next/image";
import { secondaryFont } from "../../../fonts/fonts";
import { FaSpotify, FaApple } from "react-icons/fa6";

const AfterDark = React.memo(function AfterDark(): React.ReactElement {
  const platforms = React.useMemo(
    () => [
      {
        name: "Spotify",
        Icon: FaSpotify,
        link: "https://open.spotify.com/album/4MqEwgtXK0uO9CyWIQTl9b?si=4OLAASeQT2W3Ea_DE71iEA",
      },
      {
        name: "Apple Music",
        Icon: FaApple,
        link: "https://music.apple.com/us/album/after-dark-ep/1810269915",
      },
      // { name: "YouTube", Icon: FaYoutube, link: "YOUTUBE_LINK" },
    ],
    []
  );

  const handlePlatformClick = React.useCallback((link: string) => {
    window.open(link, "_blank");
  }, []);

  return (
    <div className="flex flex-col justify-center items-center mb-12">
      <Image
        src={"/images/afterdark.png"}
        alt="AFTER DARK EP cover"
        width={256}
        height={256}
        priority
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
      </h1>

      {/* streaming buttons */}
      <div className="flex flex-wrap justify-center items-center gap-2 m-3">
        {platforms.map(({ name, Icon, link }) => (
          <div
            key={name}
            className="flex justify-center items-center gap-2 p-4 bg-black/25 backdrop-blur rounded-lg hover:bg-black/50 transition-colors p-noselect cursor-pointer"
            onClick={() => handlePlatformClick(link)}
          >
            <Icon className="text-xl" />
            Listen on {name}
          </div>
        ))}
      </div>
    </div>
  );
});

export default AfterDark;
