import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        PrimaryColor: "#06030A",
        bluredColors: "#140C20",
        cardColors: "#100A18",
      },

      backgroundImage: {
        "custom-image": "url('/Herobg.svg')",
      },
      spacing: {
        "1/5": "3%", // Custom spacing value for 20%
        "2/5": "7%",
      },
      width: {
        "3/5": "45rem",
        "4/5": "65rem",
        "5/6": "74rem",
      },
      fontSize: {
        // Add custom font sizes here
        xxs: "0.625rem", // Custom extra small font size
        xxl: "1.75rem", // Custom extra large font size
        huge: "5rem", // Custom very large font size
      },
      animation: {
        spin3d: "spin3d 4s linear infinite", // Custom animation name
      },
      keyframes: {
        spin3d: {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
