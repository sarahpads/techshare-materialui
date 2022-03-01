import { Box, makeStyles, Typography, List, ListItem } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
    mb: '2rem'
  },
  title: {
    marginBottom: 0,
    fontSize: '2rem'
  }
})

export const Component = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Typography className={classes.title}>
        This is the most common usage I see when looking at MaterialUI projects
        It's a valid way to approach styling, but it does present some challenges:
      </Typography>

      <List>
        <ListItem>This setup doesn't lend itself well to reuse</ListItem>
        <ListItem>To reuse means and extra layer of complexity</ListItem>
      </List>
    </Box>
  )
}
