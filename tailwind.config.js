/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      backgroundImage: {
        "section-a": "url(/img/section-a.webp)",
        "section-b": "url(/img/section-b.webp)",
        "section-c": "url(/img/section-c.webp)",
        "section-d": "url(/img/section-d.webp)",
        "section-e": "url(/img/section-e.webp)",
        "section-f": "url(/img/section-f.webp)",
      },

      keyframes: {
        fadeBounce: {
          "0%,20%,50%,80%,100%": {
            opacity: 0,
            transform: "translate(-50%,-10px)",
          },
          "40%": { opacity: 1, transform: "translate(-50%,0)" },
        },
        fadeInUp: {
          "0%": {
            opacity: 0,
            transform: "translateY(100px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0px)",
          },
        },
      },
      animation: {
        fadeBounce: "fadeBounce 4s  infinite",
        fadeInUp1: "fadeInUp 2s ",
        fadeInUp2: "fadeInUp 3s ",
        fadeInUp3: "fadeInUp 4s ",
      },
    },
  },
  plugins: [],
};
