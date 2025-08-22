import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "440px", // 커스텀 브레이크포인트
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        mainBgcolor: "var(--mainBgcolor)",
        mainTextColor: "var(--mainTextColor)",
        outlineColor: "var(--outlineColor)",
        insetColor: "var(--insetColor)",
        TableComColor : "var(--TableComColor)",
        TableComColor2 : "var(--TableComColor2)",
        borderColor : "var(--borderColor)",
        borderColor2 : "var(--borderColor2)",
        tableBg : "var(--tableBg)",
      },
      fontFamily: {
       subTextFont: ["subTextFont", "sans-serif"],
       tableFont: ["tableFont", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
