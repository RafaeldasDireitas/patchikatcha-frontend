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
            "button-background": "#BC6C25",
            "light-button-background": "#F0DDCD",
            "button-focused": "#6A381F",
            "body-background": "#ffedd8",
            "button-light-focus": "#F0DDCD"
         },
         textColor: {
            light: "#BC6C25",
            dark: "#6A381F"
         },
         borderColor: {
            "border-light": "#BC6C25"
         }
      }
   },
   plugins: [require("daisyui")]
};
export default config;
