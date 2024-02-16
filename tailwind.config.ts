import type { Config } from "tailwindcss";

const config: Config = {
   content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
   theme: {
      extend: {
         backgroundImage: {
            "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
         },
         backgroundColor: {
            "button-background": "#BC6C25"
         },
         textColor: {
            light: "#BC6C25"
         }
      }
   },
   plugins: [require("daisyui")]
};
export default config;
