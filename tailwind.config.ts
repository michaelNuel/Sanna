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
        bluredColors: "#140C20"
      },

      backgroundImage:{
        'custom-image': "url('/Herobg.svg')"
      },
      spacing: {
        '1/5': '3%', // Custom spacing value for 20%
        '2/5': "13%",
      },
      width: {
        '4/5': "65rem"
      }
    },
  },
  plugins: [],
};
export default config;
