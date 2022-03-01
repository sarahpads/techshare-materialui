import { Box, createTheme, ThemeProvider, Typography, List, ListItem } from '@mui/material'

// https://mui.com/customization/default-theme/#main-content
export const baseTheme = createTheme({
  typography: {
    h1: {
      marginBottom: 0,
      fontSize: '2rem'
    },
  },
})

export const Component = () => {
  return (
    <ThemeProvider theme={baseTheme}>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '2rem'
      }}>
        <Typography variant="h1">
          This is how I like to structure MaterialUI projects
          The outcome is the same, but is must more structured and reusable
        </Typography>

        <List>
          <ListItem>Theme rules are defined at the root</ListItem>
          <ListItem>Styling can be customized and shared without abstractions</ListItem>
        </List>
      </Box>
    </ThemeProvider>
  )
}