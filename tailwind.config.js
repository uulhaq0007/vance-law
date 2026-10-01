/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1rem', lg: '1.5rem' },
      screens: { sm: '540px', md: '720px', lg: '960px', xl: '1170px', '2xl': '1170px' },
    },
    extend: {
      colors: {
        gold: { DEFAULT: '#b89b5e', dark: '#9c8148', light: '#cbb280', pale: '#f3ede1' },
        navy: { DEFAULT: '#223555', dark: '#1a2841', deep: '#16203a' },
        ink: '#2f2f31',
        body: '#909090',
        mist: '#f5f5f5',
        line: '#e0e0e0',
      },
      fontFamily: {
        display: ['Lora', 'Georgia', 'serif'],
        sans: ['Lato', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        floatY: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
        slowZoom: { '0%': { transform: 'scale(1)' }, '100%': { transform: 'scale(1.12)' } },
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        pulseRing: { '0%': { transform: 'scale(.85)', opacity: '.65' }, '100%': { transform: 'scale(1.6)', opacity: '0' } },
      },
      animation: {
        floatY: 'floatY 5s ease-in-out infinite',
        slowZoom: 'slowZoom 14s ease-out forwards',
        marquee: 'marquee 30s linear infinite',
        pulseRing: 'pulseRing 2.2s cubic-bezier(.4,0,.6,1) infinite',
      },
    },
  },
  plugins: [],
}
