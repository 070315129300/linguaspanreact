/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'white':'#FFFFFF',
        'black':'#000000',
      },
      backgroundImage:{
        "hero":"url('/images/backgrounds/auth-bg.png')",
        "hero2":"url('/images/backgrounds/WebHero.png')"
      },
      animation: {
        shake: "shake 0.82s cubic-bezier(.36, .07, .19, .97) both",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      keyframes: {
        shake: {
          "10%, 100%": { transform: "translate3d(-1px, 0 , 0 )" },
          "20%, 80%": { transform: "translate3d(2px, 0 , 0 )" },
          "30%, 50%, 70%": { transform: "translate3d(-4px, 0 , 0 )" },
          "40%, 60%": { transform: "translate3d(4px, 0 , 0 )" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
    },
  },
  plugins: [],
}