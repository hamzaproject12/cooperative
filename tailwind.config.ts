import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './store/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        terracotta: '#E2725B',
        palmier: '#2D5A27',
        sable: '#F4A460',
        fond: '#FAFAFA',
        sage: '#9CAF88',
        'rose-light': '#F5E6E8',
      },
      borderRadius: {
        '2xl': '1rem',
      },
      boxShadow: {
        soft: '0 8px 24px rgba(45, 90, 39, 0.08)',
      },
      backgroundImage: {
        'oasis-gradient':
          'linear-gradient(135deg, rgba(226, 114, 91, 0.18), rgba(244, 164, 96, 0.12), rgba(45, 90, 39, 0.10))',
      },
    },
  },
  plugins: [],
};

export default config;
