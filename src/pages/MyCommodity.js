import '../App.css'
import TitlebarImageList from '../components/CommodityList'
import { NaviBar } from '../components/NaviBar'
import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import CommodityEditText from '../components/CommodityEditText'
import { CREATE_COMMODITY_URL } from '../utils/api'
import { useRef, useState } from 'react'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getStorage, ref, getDownloadURL, uploadBytesResumable } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



function MyCommodity () {
  const [title, setTitle] = React.useState("")
  const [content, setContent] = React.useState("")
  const [isShowAdd, setIsShowAdd] = React.useState(false)
  const [selectedImage, setSelectedImage] = React.useState(null)
  const curUser = JSON.parse(sessionStorage.getItem("user"))
  const [progresspercent, setProgresspercent] = useState(0)
  const [imageUrl, setImageUrl] = useState(null)
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

  const isHome = false
  const handleAddFormClick = () => {
    setIsShowAdd(true)
  }
  const handleAddFormSubmit = () => {
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
    uploadImageToFirebase()
  }
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
          const data = { user: curUser, commodityname: title, content: content, imgUrl: downloadURL }
          SendAddCommodityRequest(data)
        })
      }
    )
  }
  const handleAddFormClose = () => {
    setIsShowAdd(false)
  }
  const SendAddCommodityRequest = async (Data) => {
    try {
      // build post request params
      const params = {
        method: 'POST',
        body: JSON.stringify({ user: Data['user'], commodityname: Data['commodityname'], content: Data['content'], imgUrl: Data.imgUrl }),
        headers: { 'Content-Type': 'application/json' },
      }
      const createResponse = await fetch(CREATE_COMMODITY_URL, params)
      const newData = await createResponse.json()
      //process register request response
      const code = newData['status']
      if (code === 200) {
        alert("Create commodity successfully!")
        setIsShowAdd(false)
      } else {
        alert(newData['message'])
      }
    }
    catch (e) {
      console.log(e)
    }
  }
  return (
    <div>
      <header>
        <NaviBar></NaviBar>
      </header>
      <article>
        <div className='flexbox-centering'>
          <Button sx={{ mt: 3 }} variant="contained" onClick={handleAddFormClick} >Add new commodity</Button>
        </div>
        <div>
          <TitlebarImageList isCom={false} isMy={true}> </TitlebarImageList>
        </div>

        <Dialog
          open={isShowAdd}
          onClose={handleAddFormClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Create new Commodity"}
          </DialogTitle>
          <DialogContent>
            <CommodityEditText title={title} setTitle={setTitle} content={content} setContent={setContent} setSelectedImage={setSelectedImage} selectedImage={selectedImage} imageUrl={imageUrl} setImageUrl={setImageUrl}></CommodityEditText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleAddFormClose}>Cancel</Button>
            <Button onClick={handleAddFormSubmit} autoFocus>
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
      </article >
    </div >
  )
}
export default MyCommodity