/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        grey: {
          100: "#EEEFF4",
          200: "#C8CCD8",
          300: "#7D828F",
          400: "#60636D"
        },
        "very-dark-blue": "#1B1D23",
        "red": "#DF5656"
      },
      screens: {
        lg: '1280px',
        xl: "1440px"
      },
      backgroundImage: {
        'paramour-sm': "url('../src/assets/home/mobile/image-hero-paramour.jpg')",
        'paramour-md': "url('../src/assets/home/tablet/image-hero-paramour.jpg')",
        'paramour-lg': "url('../src/assets/home/desktop/image-hero-paramour.jpg')",
        'seraph-sm': "url('../src/assets/home/mobile/image-hero-seraph.jpg')",
        'seraph-md': "url('../src/assets/home/tablet/image-hero-seraph.jpg')",
        'seraph-lg': "url('../src/assets/home/desktop/image-hero-seraph.jpg')",
        'federal-sm': "url('../src/assets/home/mobile/image-hero-federal.jpg')",
        'federal-md': "url('../src/assets/home/tablet/image-hero-federal.jpg')",
        'federal-lg': "url('../src/assets/home/desktop/image-hero-federal.jpg')",
        'trinity-sm': "url('../src/assets/home/mobile/image-hero-trinity.jpg')",
        'trinity-md': "url('../src/assets/home/tablet/image-hero-trinity.jpg')",
        'trinity-lg': "url('../src/assets/home/desktop/image-hero-trinity.jpg')",
        'small-team-sm': "url('../src/assets/home/mobile/image-small-team.jpg')",
        'small-team-md': "url('../src/assets/home/tablet/image-small-team.jpg')",
        'small-team-lg': "url('../src/assets/home/desktop/image-small-team.jpg')",
        'del-sol-sm': "url('../src/assets/portfolio/mobile/image-del-sol.jpg')",
        'del-sol-md': "url('../src/assets/portfolio/tablet/image-del-sol.jpg')",
        'del-sol-lg': "url('../src/assets/portfolio/desktop/image-del-sol.jpg')",
        'tower-228b-sm': "url('../src/assets/portfolio/mobile/image-228b.jpg')",
        'tower-228b-md': "url('../src/assets/portfolio/tablet/image-228b.jpg')",
        'tower-228b-lg': "url('../src/assets/portfolio/desktop/image-228b.jpg')",
        'le-prototype-sm': "url('../src/assets/portfolio/mobile/image-prototype.jpg')",
        'le-prototype-md': "url('../src/assets/portfolio/tablet/image-prototype.jpg')",
        'le-prototype-lg': "url('../src/assets/portfolio/desktop/image-prototype.jpg')",
        'portfolio-seraph-sm': "url('../src/assets/portfolio/mobile/image-seraph.jpg')",
        'portfolio-seraph-md': "url('../src/assets/portfolio/tablet/image-seraph.jpg')",
        'portfolio-seraph-lg': "url('../src/assets/portfolio/desktop/image-seraph.jpg')",
        'eebox-sm': "url('../src/assets/portfolio/mobile/image-eebox.jpg')",
        'eebox-md': "url('../src/assets/portfolio/tablet/image-eebox.jpg')",
        'eebox-lg': "url('../src/assets/portfolio/desktop/image-eebox.jpg')",
        'portfolio-federal-sm': "url('../src/assets/portfolio/mobile/image-federal.jpg')",
        'portfolio-federal-md': "url('../src/assets/portfolio/tablet/image-federal.jpg')",
        'portfolio-federal-lg': "url('../src/assets/portfolio/desktop/image-federal.jpg')",
        'edelweiss-hotel-sm': "url('../src/assets/portfolio/mobile/image-edelweiss.jpg')",
        'edelweiss-hotel-md': "url('../src/assets/portfolio/tablet/image-edelweiss.jpg')",
        'edelweiss-hotel-lg': "url('../src/assets/portfolio/desktop/image-edelweiss.jpg')",
        'netcry-sm': "url('../src/assets/portfolio/mobile/image-netcry.jpg')",
        'netcry-md': "url('../src/assets/portfolio/tablet/image-netcry.jpg')",
        'netcry-lg': "url('../src/assets/portfolio/desktop/image-netcry.jpg')",
        'hypers-sm': "url('../src/assets/portfolio/mobile/image-hypers.jpg')",
        'hypers-md': "url('../src/assets/portfolio/tablet/image-hypers.jpg')",
        'hypers-lg': "url('../src/assets/portfolio/desktop/image-hypers.jpg')",
        'sxiv-sm': "url('../src/assets/portfolio/mobile/image-sxiv.jpg')",
        'sxiv-md': "url('../src/assets/portfolio/tablet/image-sxiv.jpg')",
        'sxiv-lg': "url('../src/assets/portfolio/desktop/image-sxiv.jpg')",
        'portfolio-trinity-sm': "url('../src/assets/portfolio/mobile/image-trinity.jpg')",
        'portfolio-trinity-md': "url('../src/assets/portfolio/tablet/image-trinity.jpg')",
        'portfolio-trinity-lg': "url('../src/assets/portfolio/desktop/image-trinity.jpg')",
        'portfolio-paramour-sm': "url('../src/assets/portfolio/mobile/image-paramour.jpg')",
        'portfolio-paramour-md': "url('../src/assets/portfolio/tablet/image-paramour.jpg')",
        'portfolio-paramour-lg': "url('../src/assets/portfolio/desktop/image-paramour.jpg')",
        'about-us-hero-sm': "url('../src/assets/about/mobile/image-hero.jpg')",
        'about-us-hero-md': "url('../src/assets/about/tablet/image-hero.jpg')",
        'about-us-hero-lg': "url('../src/assets/about/desktop/image-hero.jpg')",
        'contact-us-hero-sm': "url('../src/assets/contact/mobile/image-hero.jpg')",
        'contact-us-hero-md': "url('../src/assets/contact/tablet/image-hero.jpg')",
        'contact-us-hero-lg': "url('../src/assets/contact/desktop/image-hero.jpg')",
        'map-sm': "url('../src/assets/contact/mobile/image-map.png')",
        'map-md': "url('../src/assets/contact/tablet/image-map.png')",
        'map-lg': "url('../src/assets/contact/desktop/image-map.png')",
      }
    },
  },
  plugins: [],
}