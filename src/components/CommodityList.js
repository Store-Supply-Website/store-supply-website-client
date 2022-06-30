import * as React from 'react'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'
import ListSubheader from '@mui/material/ListSubheader'
import IconButton from '@mui/material/IconButton'
import InfoIcon from '@mui/icons-material/Info'
import Button from '@mui/material/Button'
import { Grid } from '@mui/material'
//Diff from merge YT branch TBD
// export default function TitlebarImageList () {
//   const handleClick = (e) => {
//     console.log(e.target)
//   }
//   return (
//     <ImageList sx={{ width: 800, height: 1100, mx: 30 }}>

import { useNavigate } from 'react-router-dom'
import { StoreContext } from '../context/context'
import { useState, useEffect, useContext } from "react"
import { Home_COMMODITY_URL, Home_MYCOMMODITY_URL } from '../utils/api'
export default function TitlebarImageList (props) {
  const navigate = useNavigate()
  const { user } = useContext(StoreContext)
  const [comData, setComData] = useState([])
  const [loading, setLoading] = useState('')
  const [myComData, setMyComData] = useState([])
  const curUser = JSON.parse(sessionStorage.getItem("user"))
  const isMy = props.isMy
  const isCom = props.isCom
  // console.log(curUser)
  var isLogin = false
  if (curUser != undefined) {
    isLogin = true
  }
  useEffect(() => {
    async function SendCommodityRequest () {

      try {

        const response = await fetch(Home_COMMODITY_URL)
        const newData = await response.json()
        //process register request response
        const code = newData['status']
        if (code === 200) {
          // alert("Show commodity successfully!")
          console.log(newData)
          setComData(prev => [...newData['data']])
        } else {
          // alert(newData['message'])
        }

      }
      catch (e) {
        console.log(e)
      }
    }
    SendCommodityRequest()
    async function SendMyCommodityRequest (Data) {

      try {
        //build post request params
        const params = {
          method: 'POST',
          body: JSON.stringify({ id: Data['id'] }),
          headers: { 'Content-Type': 'application/json' },
        }
        const createResponse = await fetch(Home_MYCOMMODITY_URL, params)
        const newData = await createResponse.json()
        //process register request response
        const code = newData['status']
        if (code === 200) {
          // alert("get Mycommodity successfully!")
          console.log(newData['data'])
          setMyComData(prev => [...newData['data']])
          console.log(myComData)
        } else {
          // alert(newData['message'])
        }
      }
      catch (e) {
        console.log(e)
      }
    }
    if (isLogin) {

      const reqData = { id: curUser['_id'] }
      console.log(reqData)
      SendMyCommodityRequest(reqData)
    }
  }, [loading])

  useEffect(() => {
    console.log(myComData) // { num: 1 } 数据已更新
  }, [myComData])
  useEffect(() => {
    console.log(comData) // { num: 1 } 数据已更新
  }, [comData])
  // const SendMyCommodityRequest = async (Data) => {
  //   // supplier:req.body.user,
  //   // commodityname:req.body.commodityname,
  //   // content:req.body.content

  //   try {
  //     //build post request params
  //     const params = {
  //       method: 'POST',
  //       body: JSON.stringify({ user: Data['user'], commodityname: Data['commodityname'], content: Data['content'] }),
  //       headers: { 'Content-Type': 'application/json' },
  //     }
  //     const createResponse = await fetch(Home_MYCOMMODITY_URL, params)
  //     const newData = await createResponse.json()
  //     //process register request response
  //     const code = newData['status']
  //     if (code === 200) {
  //       // alert("get commodity successfully!")
  //       console.log(newData)
  //     } else {
  //       alert(newData['message'])
  //     }
  //   }
  //   catch (e) {
  //     console.log(e)
  //   }
  // }
  // const SendCommodityRequest = async () => {

  //   try {

  //     const response = await fetch(Home_COMMODITY_URL)
  //     const newData = await response.json()
  //     //process register request response
  //     const code = newData['status']
  //     if (code === 200) {
  //       alert("Create commodity successfully!")
  //       console.log(newData)
  //     } else {
  //       alert(newData['message'])
  //     }

  //   }
  //   catch (e) {
  //     console.log(e)
  //   }
  // }
  const handleClick = (e) => {

    //test user info
    console.log(curUser)

    navigate('/commodity/detail/101')
    console.log(e.target)

  }
  return (
    <>

      {
        isCom && (
          <Grid container direction='column' alignItems='center' justify='center'>
            <Button variant="text" alignItems="center" sx={{ mt: 3 }}>Popular items</Button>
            {/* <ImageList sx={{ width: 0.5, height: 0.8 }}>
              {comData.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    src={`${'https://images.unsplash.com/photo-1551782450-a2132b4ba21d'}?w=248&fit=crop&auto=format`}
                    srcSet={`${'https://images.unsplash.com/photo-1551782450-a2132b4ba21d'}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.commodityname}
                    loading="lazy"
                  />
                  <ImageListItemBar
                    title={item.commodityname}
                    // subtitle={item.author}
                    actionIcon={
                      <IconButton
                        sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                        aria-label={`info about ${item.title}`}
                        onClick={(e) => {
                          navigate('/commodity/detail/' + item._id)
                          console.log(item._id)
                        }}
                      >
                        <InfoIcon />
                      </IconButton>
                    }
                  />
                </ImageListItem>
              ))}
            </ImageList> */}
            <ImageList sx={{ width: 0.5, height: 0.8 }}>
              {/* <ImageListItem key="Subheader" c[]\ols={2}>
        <ListSubheader component="div">December</ListSubheader>
      </ImageListItem> */}

              {itemData.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                  />
                  <ImageListItemBar
                    title={item.title}
                    subtitle={item.author}
                    actionIcon={
                      <IconButton
                        sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                        aria-label={`info about ${item.title}`}
                        onClick={handleClick}
                      >
                        <InfoIcon />
                      </IconButton>
                    }
                  />
                </ImageListItem>
              ))}
            </ImageList>

          </Grid>)
      }
      {
        isMy && isLogin && (<Grid container direction='column' alignItems='center' justify='center'>
          <Button variant="text" alignItems="center" sx={{ mt: 3 }} >My items</Button>
          {/* <ImageList sx={{ width: 0.5, height: 0.8 }}>
            {myComData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e'}?w=248&fit=crop&auto=format`}
                  srcSet={`${'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e'}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.commodityname}
                  loading="lazy"
                />
                <ImageListItemBar
                  title={item.commodityname}
                  // subtitle={item.author}
                  actionIcon={
                    <IconButton
                      sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                      aria-label={`info about ${item.title}`}
                      onClick={(e) => {
                        navigate('/commodity/detail/' + item._id)
                        console.log(item._id)
                      }}
                    >
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </ImageListItem>
            ))}
          </ImageList> */}
          <ImageList sx={{ width: 0.5, height: 0.8 }}>
            {/* <ImageListItem key="Subheader" c[]\ols={2}>
        <ListSubheader component="div">December</ListSubheader>
      </ImageListItem> */}

            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
                <ImageListItemBar
                  title={item.title}
                  subtitle={item.author}
                  actionIcon={
                    <IconButton
                      sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                      aria-label={`info about ${item.title}`}
                      onClick={handleClick}
                    >
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </ImageListItem>
            ))}
          </ImageList>
          )
        </Grid>)
      }

    </>

  )
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    author: '@bkristastucchio',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    author: '@hjrc33',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    author: '@tjdragotta',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    author: '@katie_wasserman',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    author: '@silverdalex',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    author: '@shelleypauls',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    author: '@peterlaster',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    author: '@southside_customs',
    cols: 2,
  },
]
