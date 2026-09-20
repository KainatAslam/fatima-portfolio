/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Cafe Collection Design Palette */
        background: '#E4D8CB', // CHAI - warm sand page background
        surface: '#F1EEEB',    // FROTH - clean ivory card surface
        ink: '#241E1C',        // Deep Espresso - crisp high-contrast text & headings
        muted: '#6E625B',      // LATTE TONE - secondary & caption text
        line: '#CDC6C3',       // CREME - subtle dividers & borders
        accent: '#6B483D',     // ROASTED MOCHA - primary CTA buttons & active states
        'accent-ink': '#FFFFFF',
        signal: '#CFB3A9',     // CINNA - warm terracotta blush highlights & badges

        // Direct Swatch Aliases from Palette Card
        froth: '#F1EEEB',
        chai: '#E4D8CB',
        creme: '#CDC6C3',
        latte: '#A09086',
        cinna: '#CFB3A9',
      },
      fontFamily: {
        heading: ['"Bricolage Grotesque"', 'system-ui', '-apple-system', 'sans-serif'],
        body: ['"Instrument Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        card: '0.75rem',
        interactive: '9999px',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
}
