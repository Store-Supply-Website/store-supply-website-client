import { AppBar, IconButton, Toolbar, Typography, Stack, Button } from "@mui/material"
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon'
import { Link } from "react-router-dom"

export const NaviBar = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton size='large' edge='start' color='inherit' aria-label="logo">
          <CatchingPokemonIcon />
        </IconButton>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          Online Store Supply
        </Typography>
        <Stack direction='row' spacing={2}>
          <Button color='inherit' component={Link} to="/home">Home</Button>
          <Button color='inherit' component={Link} to="/profile">Profile</Button>

          <Button color='inherit' component={Link} to="/commodity">commodity</Button>
          <Button color='inherit' component={Link} to="/">Logout</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  )

}
