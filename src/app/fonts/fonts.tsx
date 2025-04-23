import localFont from "next/font/local";
// import { Kanit } from "next/font/google";

// export const secondaryFont = Kanit({
//   subsets: ["latin"],
//   display: "swap",
//   weight: "300",
// });

const BasementGrotesque = localFont({
  src: "basement-grotesque/BasementGrotesque-Black.otf",
  variable: "--font-basement",
});

const nocturneSerif = localFont({
  src: "nocturne-serif/NocturneSerif-Regular.otf",
  variable: "--font-nocturne",
});

const n27 = localFont({
  src: "n27/N27-Regular.otf",
  variable: "--font-n27",
});

const n27I = localFont({
  src: "n27/N27-RegularItalic.otf",
  variable: "--font-n27I",
});

const daubenton = localFont({
  src: "daubenton/daubenton.woff",
  variable: "--font-daubenton",
});

const happyTimes = localFont({
  src: "happy-times/happy-times-regular.otf",
  variable: "--font-happy-times",
});

const playfair = localFont({
  src: "playfair-display/PlayfairDisplay-Regular.ttf",
  variable: "--font-playfair",
});

const opensauce = localFont({
  src: "opensauce/OpenSauceTwo-Italic.otf",
  variable: "--font-opensauce",
});
export const mainFont = BasementGrotesque;
export const secondaryFont = n27I;
