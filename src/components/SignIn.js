import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import { LOGIN_URL, TEST_URL } from '../utils/api'
import { useState, useEffect } from "react"
import Alert from '@mui/material/Alert'
import { useNavigate } from 'react-router-dom'
function Copyright (props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const theme = createTheme()

export default function SignIn () {
  const [isShowInfoAlert, setIsShowInfoAlert] = useState(false)
  const navigate = useNavigate()
  const handleClickOpen = () => {
    console.log('open')
    setIsShowInfoAlert(true)
  }
  const handleClose = () => {
    console.log('close')
    setIsShowInfoAlert(false)
  }
  const isValidInfo = (data) => {
    let email = data.get('email')
    let password = data.get('password')
    if (email == undefined || email === '') {
      return false
    }
    if (password == undefined || password === '') {
      return false
    }
    return true
  }
  const SendLoginRequest = async (loginData) => {
    // try {
    //   const response = await fetch(TEST_URL)
    //   // const data = await response.json()
    //   console.log(response)
    // }
    // catch (e) {
    //   console.log(e)
    // }
    try {

      //build post request params
      const params = {
        method: 'POST',
        body: JSON.stringify({ email: loginData.get('email'), password: loginData.get('password') }),
        headers: { 'Content-Type': 'application/json' },
      }
      const createResponse = await fetch(LOGIN_URL, params)
      const newData = await createResponse.json()
      //process login request response
      const code = newData['status']
      if (code === 200) {
        navigate('/home')
      } else {
        alert(newData['message'])
      }
      console.log(newData)
    }
    catch (e) {
      console.log(e)
    }
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    console.log({
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      email: data.get('email'),
      password: data.get('password'),
    })

    if (!isValidInfo(data)) {
      handleClickOpen()
      return
    }

    SendLoginRequest(data)
  }

  return (
    <>
      {isShowInfoAlert && (<Alert onClose={handleClose} severity="info">Please enter non-empty email and password</Alert>)}
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="register" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    </>

  )
}