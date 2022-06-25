import React, { useState } from "react"
import { NaviBar } from '../components/NaviBar'
import TitlebarImageList from '../components/CommodityList'
import { Tabs, Tab, Grid, Paper, Button } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import { Link } from "react-router-dom"
function User () {
  console.log()

  const styles = {
    paper: {
      marginTop: 20,
      marginBottom: 10,
      padding: 30
    }
  }

  // const clickHandler = () => {
  //   console.log('clicked')
  // }

  console.log(styles.paper)
  return (
    <div >
      <NaviBar></NaviBar>
      <Grid container spacing={2} alignItems="stretch" justify="center" direction="column">
        <Grid item xs={12}>
          <Paper style={styles.paper}>
            User Info
            User Info
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper style={styles.paper}>
            Supplies
            Supplies
          </Paper>
        </Grid>
      </Grid>
      <Grid>
        <Button
          variant="contained"
          startIcon={<EditIcon />}
          color="primary" type="submit"
          // onClick={clickHandler}
          component={Link}
          to="/update"
        >
          Edit profile
        </Button>
      </Grid>
      {/* <Tabs
        value={0}
        variant="fullWidth"
        indicatorColor="primary"
        aria-label="basic tabs example">
        <Tab label="User Info" />
        <Tab label="Items" />
      </Tabs> */}
    </div>

  )
}

export default User
