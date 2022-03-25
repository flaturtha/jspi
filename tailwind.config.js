module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    fontFamily: {
      chakra: ['Chakra Petch', 'sans-serif'],
      sans: ['Bai Jamjuree', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        // 'mainImage': "url('/img/web-bg_11.png')",
        // 'mainImage': "linear-gradient(to top, rgba('#000',1.0), rgba('#000',0.0)), url('/img/web-bg_11.png')",
        'mainImage_sm': "linear-gradient(to top, rgba(0, 0, 0, 1.0), rgba(0, 0, 0, 0.0)), url('/img/web-bg_960x1280.png')",
        'mainImage_md': "linear-gradient(to top, rgba(0, 0, 0, 1.0), rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0)), url('/img/web-bg_1024x768.png')",
        'mainImage_lg': "linear-gradient(to top, rgba(0, 0, 0, 1.0), rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0)), url('/img/web-bg_1024x768.png')"


      }
    },
  },
  plugins: [],
};