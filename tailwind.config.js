module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      background: '#070724',
      hoverBackground: '#38384F',
      fontWhite: '#ffffff',
      titles: '#838391',
      mercury: '#419EBB',
      venus: '#EDA249',
      earth: '#6F2ED6',
      mars: '#D14C32',
      jupiter: '#D83A34',
      saturn: '#CD5120',
      uranus: '#1EC2A4',
      neptune: '#2D68F0'
    },
    fontFamily: {
      'antonio': ['Antonio', 'sans-serif'],
      'spartan': ['Spartan', 'sans-serif'],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
