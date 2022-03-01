import { List, ListItem, Typography, styled } from '@mui/material'

const Container = styled('div')(
  ({ theme }) => `
  background-color: ${theme.palette.primary.main}
  display: "flex",
  alignItems: "center",
  padding: ${theme.spacing(2)}
`)

export const StyledComponents = () => {
  return (
    <Container>
      <Typography variant="h1">Using styled() API</Typography>
      <List>
        <ListItem>It's a common, familiar, and well understood API</ListItem>
        <ListItem>Makes it easy to share custom styles HTML elements</ListItem>
        <ListItem>
          Can be used to override built-in Material components on a *one-off basis*
          (any common overrides should be defined in the theme)
        </ListItem>
      </List>
    </Container>
  )
}
