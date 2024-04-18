import type { Config } from "tailwindcss";
import localFont from "@next/font/dist/local";

const basementGrotesque = localFont({
  src: [
    {
      path: "./public/fonts/BasementGrotesque-Black.otf",
      weight: "800",
    },
  ],
  variable: "--font-basement-grotesque",
});

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "basement-grotesque": ["var(--font-basement-grotesque)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
