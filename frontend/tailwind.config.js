module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      minWidth:{
        'small':'120px',
        'large':'210px'
      },
      minHeight:{
        'large':'210px',
        'small':'120px',
      },
      keyframes:{
        'slide-in':{
          '0%':{
            transform:'translateX(-200px)'
          },
         '100%':{
           transform:'translateX(0pxp)'
         }
        }
      },
      animation:{
        'slide-in':'slide-in 0.5s ease-out'
      }
  },
  plugins: [],
}
}
