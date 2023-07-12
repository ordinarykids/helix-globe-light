import localFont from 'next/font/local'

const ttNorms = localFont({
  src: [
    {
      path: '../fonts/TT_Norms_Pro_Variable.woff2',
    },
  ],
  fallback: ['sans-serif'],
  variable: '--tt-norms',
})

export default ttNorms
