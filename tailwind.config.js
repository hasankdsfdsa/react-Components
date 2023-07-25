/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FDBB57',
        'secendary': '#FAE3B6',
        'middle': '#FEECC8',
        'tin': '#CFA485',
      },
      fontFamily: {
        'pop': ['Poppins'],
        'frank': ['Frank Ruhl Libre'],
        'pod': ['Podkova'],
      },
      fontSize: {
        small: '22px',
        medium: '28px',
        large: '64px'
      }
    },
  },
  plugins: [],
}

