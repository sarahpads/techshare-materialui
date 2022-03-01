import React from 'react';
import { Container, CssBaseline, Grid, Stack, ThemeProvider } from '@mui/material'

import { theme } from './theme/theme'
import { TaskCard } from './components/TaskCard';
import { FinishedCard } from './components/FinishedCard';

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Container>
          <Grid container sx={{p: 2}}>
            <Grid item sm={12} md={6}>
              <TaskCard />
            </Grid>

            <Grid item sm={12} md={6}>
              <FinishedCard />
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
