/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

['lightBlue', 'warmGray', 'trueGray', 'coolGray', 'blueGray'].forEach(
  (color) => {
    delete colors[color];
  }
);

module.exports = {
  theme: {
    extend: {
      boxShadow: {},
      animation: {},
      maxWidth: {},
      backgroundImage: {},
      borderWidth: {
        3: '3px',
      },
      colors: {
        ...colors,
      },
      fontFamily: {},
      height: {},
      lineHeight: {},
      keyframes: {},
      minHeight: {},
      minWidth: {},
      spacing: {},
      transitionDuration: {},
      transitionProperty: {},
      width: {},
      zIndex: {
        60: '60',
      },
    },
    fontFamily: {},
    screens: {
      xs: '320px',
      sm: '480px',
      smMax: { max: '480px' },
      md: '768px',
      lg: '976px',
      xl: '1440px',
      xxl: '2560px',
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.text-heading-1': {
          textTransform: 'uppercase',
          fontSize: '6rem', // adjusted
          lineHeight: '1',
          '@media (max-width: 768px)': {
            fontSize: '3rem', // adjusted
          },
        },
        '.text-heading-2': {
          textTransform: 'uppercase',
          fontSize: '3rem', // adjusted
          lineHeight: '1',
          '@media (max-width: 768px)': {
            fontSize: '1.875rem', // adjusted
          },
        },
        '.text-heading-3': {
          textTransform: 'uppercase',
          fontSize: '1.875rem', // adjusted
          lineHeight: '1',
          '@media (max-width: 768px)': {
            fontSize: '1.3125rem', // adjusted
          },
        },
        '.text-heading-4': {
          textTransform: 'uppercase',
          fontSize: '1.3125rem', // adjusted
          lineHeight: '1',
          '@media (max-width: 768px)': {
            fontSize: '0.9375rem', // adjusted
          },
        },
        '.text-heading-5': {
          textTransform: 'uppercase',
          fontSize: '1.125rem', // adjusted
          lineHeight: '1',
          '@media (max-width: 768px)': {
            fontSize: '0.75rem', // adjusted
          },
        },
        '.text-heading-6': {
          textTransform: 'uppercase',
          fontSize: '0.9375rem', // adjusted
          lineHeight: '1',
          '@media (max-width: 768px)': {
            fontSize: '0.5625rem', // adjusted
          },
        },
        '.text-sub-heading-1': {
          fontSize: '1.875rem', // adjusted
          fontWeight: '300',
          lineHeight: '1',
          fontFamily: 'TimesNow',
          '@media (max-width: 768px)': {
            fontSize: '1.3125rem', // adjusted
          },
        },
        '.text-body-copy': {
          fontSize: '1.3125rem', // adjusted
          lineHeight: '2.5rem',
          '@media (max-width: 768px)': {
            fontSize: '1.125rem', // adjusted
            lineHeight: '2.25rem',
          },
        },
        '.text-cta': {
          fontSize: '1.125rem', // adjusted
        },
        '.text-metadata': {
          fontSize: '0.9435rem', // adjusted
          lineHeight: '1.5rem',
          '@media (max-width: 768px)': {
            fontSize: '0.87525rem', // adjusted
            lineHeight: '1.5rem',
          },
        },
        '.no-scrollbar': {
          msOverflowStyle: 'none' /* IE and Edge */,
          scrollbarWidth: 'none' /* Firefox */,
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    }),
  ],
};
