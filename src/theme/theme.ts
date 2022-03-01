import { createTheme } from "@mui/material";

const primary = {
  50: '#F0F7FF',
  100: '#C2E0FF',
  200: '#80BFFF',
  300: '#66B2FF',
  400: '#3399FF',
  main: '#007FFF', // contrast 3.83:1
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
  800: '#004C99',
  900: '#003A75',
};
const background = `linear-gradient(to right bottom, ${primary.main}, ${primary[700]} 120%)`
const boxShadow = '0px 20px 25px rgba(0, 0, 0, 0.1), 0px 10px 10px rgba(0, 0, 0, 0.04)'
const fontFamily = ['-apple-system', 'BlinkMacSystemFont', 'sans-serif'].join(',')

export const theme = createTheme({
  palette: {
  },
  typography: {
  },
  spacing: 8,
  shape: {
  },
  components: {
  }
})
