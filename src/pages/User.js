import React, { useState } from "react"
import { NaviBar } from '../components/NaviBar'
import TitlebarImageList from '../components/CommodityList'
import { Tabs, Tab, Grid, Paper, Button } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import { Link } from "react-router-dom"
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import { red } from '@mui/material/colors'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import { Register_URL, UPDATE_URL, LOGIN_URL, SEARCH_URL } from '../utils/api'



function User () {
  const [phoneNum, setPhoneNum] = useState()
  const [address, setAddress] = useState()

  console.log('hi')
  console.log(sessionStorage)
  const curUser = sessionStorage.getItem('user')
  console.log(curUser)
  const curUserObj = JSON.parse(curUser)
  const curId = curUserObj._id
  console.log(curId)
  const styles = {
    paper: {
      marginTop: 20,
      marginBottom: 10,
      padding: 30
    }
  }
  const SendRegisterRequest = async (LoginData) => {
    const curUser = sessionStorage.getItem('user')
    const curUserObj = JSON.parse(curUser)
    const curId = curUserObj._id
    console.log(curId)
    try {
      const createResponse = await fetch(SEARCH_URL + '/' + curId)
      const newData = await createResponse.json()
      //process register request response
      const code = newData['status']
      console.log("test1")
      if (code === 200) {
        console.log("test1")
        console.log(newData.data.address)
        console.log("test2")
        setPhoneNum(newData.data.phone)
        setAddress(newData.data.address)
      } else {
        alert(newData['message'])
      }
      console.log(newData)
    }
    catch (e) {
      console.log(e)
    }
  }

  SendRegisterRequest()

  return (
    <div>
      <NaviBar></NaviBar>
      <Paper style={styles.paper}
        sx={{
          p: 2,
          margin: 'auto',
          maxWidth: 500,
          flexGrow: 1,
          backgroundColor: '#fff'
        }}>
        <Grid container spacing={20} alignItems="stretch" justify="center" direction="column"
        >
          <Grid item xs={20}>

            <Typography variant="body2" gutterBottom>
              Username
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {curUserObj.username}
            </Typography>
            <Typography variant="body2" gutterBottom>
              Email
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {curUserObj.email}
            </Typography>
            <Typography variant="body2" gutterBottom>
              Phone
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {phoneNum}
            </Typography>
            <Typography variant="body2" gutterBottom>
              Address
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {address}
            </Typography>
          </Grid>

        </Grid>
        <Grid>
          <Button
            variant="contained" fullWidth='true'
            startIcon={<EditIcon />}
            color="primary" type="submit"
            component={Link}
            to="/update"
          >
            Edit profile
          </Button>
        </Grid>
      </Paper>
    </div>

  )
}

export default User
