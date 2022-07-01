import * as React from 'react'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { red } from '@mui/material/colors'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

import CommodityEditText from './CommodityEditText'
import { useSearchParams, useParams } from 'react-router-dom'
import { DElETE_COMMODITY_URL, Get_Detail_URL, UPDATE_COMMODITY_URL } from '../utils/api'
import { useState, useEffect, useContext } from "react"
import { useNavigate } from 'react-router-dom'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getStorage, ref, getDownloadURL, uploadBytesResumable } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const ExpandMore = styled((props) => {
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}))

export default function RecipeReviewCard () {
  const navigate = useNavigate()
  const [expanded, setExpanded] = React.useState(false)
  const [isShowAlert, setIsShowAlert] = React.useState(false)
  const [isShowEdit, setIsShowEdit] = React.useState(false)

  const [title, setTitle] = React.useState("")
  const [content, setContent] = React.useState("")
  const [isShowAdd, setIsShowAdd] = React.useState(false)
  const [selectedImage, setSelectedImage] = React.useState(null)
  const [imageUrl, setImageUrl] = useState(null)
  const [progresspercent, setProgresspercent] = useState(0)
  const curUser = JSON.parse(sessionStorage.getItem("user"))
  const [curTitle, setCurTitle] = React.useState("")
  const [curContent, setCurContent] = React.useState("")
  const [curImageUrl, setCurImageUrl] = React.useState(null)
  const [supplierName, setSupplierName] = React.useState("")
  const [supplierContact, setSupplierContact] = React.useState("")
  const [date, setDate] = React.useState("")
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDVBLrWPMdRe4QSJb1fRqvZVN0OPYY6Nrk",
    authDomain: "cs5610-5ea7c.firebaseapp.com",
    projectId: "cs5610-5ea7c",
    storageBucket: "cs5610-5ea7c.appspot.com",
    messagingSenderId: "410462085853",
    appId: "1:410462085853:web:d7b4f6dd2d6968339df134"
  }
  // Initialize Firebase
  const app = initializeApp(firebaseConfig)
  // Get a reference to the storage service, which is used to create references in your storage bucket
  const storage = getStorage(app)

  let [params] = useSearchParams()
  let id = params.get('id')
  let uid = params.get('uid')
  // console.log(id)
  // console.log(uid)
  const handleAlertClick = () => {

    setIsShowAlert(true)
  }

  const handleAlertClose = () => {
    setIsShowAlert(false)
  }
  const handleEditClick = () => {
    setIsShowEdit(true)
  }

  const handleEditClose = () => {
    setIsShowEdit(false)
  }
  const handleEditFormSubmit = () => {
    if (!title || title === '' || title == undefined) {
      alert('Please enter the title of your commodity')
      return
    }
    if (!content || content === '' || content == undefined) {
      alert('Please enter the description of your commodity')
      return
    }
    if (!selectedImage) {
      alert('Please selected image')
      return
    }
    setIsShowEdit(false)
    uploadImageToFirebase()


  }
  useEffect(() => {
    async function SendCommodityDetailRequest () {

      try {
        //build post request params
        const params = {
          method: 'POST',
          body: JSON.stringify({ commodityid: id, supplierid: uid }),
          headers: { 'Content-Type': 'application/json' },
        }
        const response = await fetch(Get_Detail_URL, params)
        const newData = await response.json()
        const code = newData['status']

        console.log(newData)
        if (code === 200) {
          const data = newData.data.commodity

          setCurTitle(data.commodityname)
          setCurContent(data['content'])
          setCurImageUrl(data.imgUrl)
          setDate(data.date)
          setSupplierName(newData.data.supplier.username)
          setSupplierContact(newData.data.supplier.email)
        } else {
          alert(newData['message'])
        }

      }
      catch (e) {
        console.log(e)
      }
    }
    SendCommodityDetailRequest()
  }, [])
  useEffect(() => {
    console.log(curTitle) // { num: 1 } 数据已更新
  }, [curTitle])
  const uploadImageToFirebase = async () => {

    // Create a storage reference from our storage service
    const storageRef = ref(storage, 'images/' + selectedImage.name)
    const uploadTask = uploadBytesResumable(storageRef, selectedImage)
    uploadTask.on("state_changed",
      (snapshot) => {
        const progress =
          Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
        setProgresspercent(progress)
      },
      (error) => {
        alert(error)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageUrl(downloadURL)
          const data = { id: id, commodityname: title, content: content, imgUrl: downloadURL }
          console.log(data)
          SendEditCommodityRequest(data)
        })
      }

    )
  }
  const SendEditCommodityRequest = async (Data) => {
    try {
      //build post request params
      const params = {
        method: 'POST',
        body: JSON.stringify({ id: Data['id'], commodityname: Data['commodityname'], content: Data['content'], imgUrl: Data.imgUrl }),
        headers: { 'Content-Type': 'application/json' },
      }
      const createResponse = await fetch(UPDATE_COMMODITY_URL, params)
      const newData = await createResponse.json()
      const code = newData['status']
      console.log(newData)
      if (code === 200) {
        alert('Update successfully')
        navigate('/')
      } else {
        alert(newData['message'])
      }
    }
    catch (e) {
      console.log(e)
    }
  }
  const SendDeleteRequest = async (commodityID) => {
    try {
      //build post request params
      const params = {
        method: 'POST',
        body: JSON.stringify({ id: commodityID }),
        headers: { 'Content-Type': 'application/json' },
      }
      const createResponse = await fetch(DElETE_COMMODITY_URL, params)
      const newData = await createResponse.json()
      const code = newData['status']
      if (code === 200) {
        alert('Delete successfully')
        //delete successfully, redirect to homepage
        navigate('/')
      } else {
        alert(newData['message'])
      }
    }
    catch (e) {
      console.log(e)
    }
  }
  const handleExpandClick = () => {
    setExpanded(!expanded)
  }
  const handleDelete = (e) => {
    setIsShowAlert(false)
    console.log('62bd34f781080d1c554bfb0c')
    SendDeleteRequest(id)
    console.log('Delete')

  }
  const handleEdit = (e) => {
    setIsShowEdit(true)
    console.log('Edit')
  }
  return (
    <div className='flexbox-centering'>
      <Card sx={{ width: 600, mt: 2 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {supplierName[0]}
            </Avatar>
          }
          // action={
          //   <IconButton aria-label="settings">
          //     <MoreVertIcon />
          //   </IconButton>
          // }
          title={supplierName}
          subheader={date}
        />
        <CardMedia
          component="img"
          height="194"
          image={curImageUrl}
          alt="Broken Image"
        />
        <CardContent>
          {/* <Typography variant="h4">
            (This is static data, we will soon allow users to add goods)
          </Typography> */}

          <Typography variant="h4">
            {curTitle}
          </Typography>
          <Typography paragraph>
          </Typography>
          <Typography variant="h5">
            About this item:
          </Typography>
          <Typography paragraph>
            {curContent}
          </Typography>
          {/* <Typography paragraph>
            - Monitor the inside of your home day and night with our 1080P HD indoor plug-in smart security camera with motion detection and two-way audio.
          </Typography>
          <Typography paragraph>
            - See, hear, and speak to people and pets in your home from your smartphone with Blink Mini’s live view and two-way audio.
          </Typography>
          <Typography paragraph>
            - Get alerts on your smartphone whenever motion is detected or customize motion detection zones so you can see what matters most.
          </Typography>
          <Typography paragraph>
            - Use Mini as an indoor plug-in chime for Blink Video Doorbell. Hear a real-time alert from Mini when someone presses your Video Doorbell.
          </Typography> */}
          <Typography paragraph>
          </Typography>
          <Typography variant="h5">
            Contact provider:
          </Typography>
          <Typography paragraph>
            {supplierContact}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites" onClick={handleAlertClick}>
            <DeleteIcon />
          </IconButton>
          <IconButton aria-label="share" onClick={handleEdit}>
            <EditIcon />
          </IconButton>

        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
              aside for 10 minutes.
            </Typography>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
              medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
              occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
              large plate and set aside, leaving chicken and chorizo in the pan. Add
              pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
              stirring often until thickened and fragrant, about 10 minutes. Add
              saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
            <Typography paragraph>
              Add rice and stir very gently to distribute. Top with artichokes and
              peppers, and cook without stirring, until most of the liquid is absorbed,
              15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
              mussels, tucking them down into the rice, and cook again without
              stirring, until mussels have opened and rice is just tender, 5 to 7
              minutes more. (Discard any mussels that don&apos;t open.)
            </Typography>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then serve.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>

      <Dialog
        open={isShowAlert}
        onClose={handleAlertClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Delete this commodity?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Warning: This operation is irreversible.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAlertClose}>Cancel</Button>
          <Button onClick={handleDelete} autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={isShowEdit}
        onClose={handleEditClick}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Edit Commodity"}
        </DialogTitle>
        <DialogContent>
          <CommodityEditText title={title} setTitle={setTitle} content={content} setContent={setContent} setSelectedImage={setSelectedImage} selectedImage={selectedImage} imageUrl={imageUrl} setImageUrl={setImageUrl}></CommodityEditText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditClose}>Cancel</Button>
          <Button onClick={handleEditFormSubmit} autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>

    </div>

  )
}
