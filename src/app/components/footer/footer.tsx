import React, { useEffect, useRef } from "react";
import {
  FaInstagram,
  FaSpotify,
  FaYoutube,
  FaApple,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer(): React.ReactElement {
  const footerRef = useRef<HTMLDivElement>(null);
  const icons = [
    {
      Icon: FaInstagram,
      link: "https://www.instagram.com/toucanfish/",
    },
    {
      Icon: FaXTwitter,
      link: "https://twitter.com/toucanfoosh",
    },
    {
      Icon: FaSpotify,
      link: "https://www.spotify.com",
    },
    {
      Icon: FaApple,
      link: "https://www.apple.com",
    },
    {
      Icon: FaYoutube,
      link: "https://www.youtube.com",
    },
  ];

  const commonClasses =
    "mix-blend-overlay p-noselect font-basement font-bold text-2xl md:text-3xl cursor-pointer p-invert-hover";

  useEffect(() => {
    const handleScroll = () => {
      if (footerRef.current) {
        const footerHeight = footerRef.current.offsetHeight;
        footerRef.current.style.top = `${
          window.scrollY + window.innerHeight - footerHeight
        }px`;
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div
      ref={footerRef}
      className="absolute flex flex-row gap-5 justify-center items-center w-full h-24 transition-all duration-0"
    >
      {icons.map(({ Icon, link }, index) => (
        <Icon
          key={index}
          className={commonClasses}
          onClick={() => window.open(link, "_blank")}
        />
      ))}
    </div>
  );
}
