import { AppBar, IconButton, Toolbar, Typography, Stack, Button } from "@mui/material"
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon'
import { Link } from "react-router-dom"

export const NaviBar = () => {
  const curUser = JSON.parse(sessionStorage.getItem("user"))
  var isLogin = false
  if (curUser != undefined) {
    isLogin = true
  }
  var mycommodity = '/mycommodity'
  var profile = '/profile'
  if (!isLogin) {
    mycommodity = '/login'
    profile = '/login'
  }
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
          <Button color='inherit' component={Link} to="/">Home</Button>
          <Button color='inherit' component={Link} to={profile}>Profile</Button>
          <Button color='inherit' component={Link} to={mycommodity}>My Commodity</Button>
          <Button color='inherit' component={Link} to="/commodity">Commodity</Button>
          <Button color='inherit' component={Link} to="/login">Logout</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  )

}
