import { createTheme, Avatar, Box, Card, LinearProgress, Typography, ThemeProvider } from '@mui/material'
import ScheduleRounded from '@mui/icons-material/ScheduleRounded';
import CodeRounded from '@mui/icons-material/CodeRounded';

// declare module '@mui/material/Paper' {
//   interface PaperPropsVariantOverrides {
//     gradient: true;
//   }
// }

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
    mode: 'dark',
    primary
  },
  typography: {
    fontFamily,
    h6: {
      lineHeight: 1.2,
      fontWeight: 700
    }
  },
  spacing: 8,
  shape: {
    borderRadius: 10
  },
  components: {
    MuiCard: {
      variants: [
        {
          props: { variant: 'elevation' },
          style: {
            background, boxShadow
          }
        }
      ]
    },
    MuiAvatar: {
      styleOverrides: {
        rounded: {
          border: '1px solid #fff'
        }
      }
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          backgroundColor: 'rgba(255,255,255,0.12)'
        },
        bar: {
          borderRadius: 10,
          backgroundColor: '#fff'
        }
      }
    }
  }
})

export const FinishedCard = () => {
  return (
    <ThemeProvider theme={theme}>
      <Card
        variant="elevation"
        sx={{
          minWidth: 280,
          maxWidth: 360,
          minHeight: 280,
          display: 'flex',
          flexDirection: 'column',
          p: 2.5,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <ScheduleRounded fontSize="inherit" />
          <Typography
            color="text.secondary"
            variant="caption"
            fontWeight={500}
            sx={{ ml: 0.5, mt: '1px' }}
          >
            March 25th
          </Typography>
        </Box>
        <Box sx={{ my: 'auto' }}>
          <Box
            sx={{
              width: 28,
              height: 28,
              bgcolor: '#fff',
              borderRadius: 0.75,
              p: '2px',
            }}
          >
            <CodeRounded color="primary" />
          </Box>
          <Typography variant="h6" component="div" sx={{ mt: 1.5, fontWeight: 500 }}>
            Check the docs for getting every component API
          </Typography>
        </Box>
        <Box sx={{ display: 'flex' }}>
          <Avatar
            imgProps={{ 'aria-labelledby': 'demo-task-card-assigne-name' }}
            src="/static/images/avatar/1-sm.jpeg"
            variant="rounded"
          />
          <Box sx={{ ml: 1 }}>
            <Typography variant="body2" color="primary.200" fontWeight={500}>
              Assigned to
            </Typography>
            <Typography id="demo-task-card-assigne-name" fontWeight={500}>
              Michael Scott
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: -0.5, mt: 0.5 }}>
          <LinearProgress
            aria-label="Progress"
            variant="determinate"
            value={60}
            sx={{ flexGrow: 1 }}
          />
          <Typography color="#00C8FF" variant="body2" sx={{ ml: 2 }}>
            <b>60%</b>
          </Typography>
        </Box>
      </Card>
    </ThemeProvider>
  )
}