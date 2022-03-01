import { Button, Box, List, ListItem, Typography, styled } from '@mui/material'

export const SystemStyles = () => {
  return (
    <>
      <Box sx={{
        backgroundColor: 'primary.main', // theme-aware property
        display: "flex",
        alignItems: "center",
        p: 2 // theme-aware property
      }}>
        <Typography variant="h1">Using the sx prop</Typography>
        <List>
          <ListItem>Easily build components using theme-defined values (ex: primary.main)</ListItem>
          <ListItem>Provides constraints to how theme properties can be used</ListItem>
          <ListItem>Shorthands for some CSS properties (ex: p instead of padding)</ListItem>
          <ListItem>Saves the need to abstract simple layouting rules into their own components</ListItem>
          <ListItem>Naming things is hard</ListItem>
        </List>
      </Box>
    </>
  )
}