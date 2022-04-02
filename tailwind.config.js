module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '20px',
    },
    extend: {
      colors: {
        'grey': {
          100: '#F4F4F4',
          300: '#CCCCCC',
          500: '#7B7B7B',
          700: '#565656',
          900: '#323232'
        },
      },
      fontFamily: {
        'lato': ['Lato', 'sans-serif'],
        'red-hat': ['Red Hat Display', 'sans-serif']
      }
    },
  },
  plugins: [],
}
