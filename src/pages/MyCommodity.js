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
import { useRef } from 'react'
function MyCommodity () {
  const childRef = useRef()
  const [title, setTitle] = React.useState("")
  const [content, setContent] = React.useState("")
  const [isShowAdd, setIsShowAdd] = React.useState(false)
  const curUser = JSON.parse(sessionStorage.getItem("user"))
  const handleAddFormClick = () => {
    // alert('Click')
    setIsShowAdd(true)
  }
  const handleAddFormSubmit = () => {
    // alert('Submit')
    setIsShowAdd(false)

    const data = { user: curUser, commodityname: title, content: content }
    console.log(title)
    console.log(content)
    // console.log(content.value)
    console.log(data['user'])
    console.log(data['commodityname'])
    console.log(data['content'])
    SendAddCommodityRequest(data)
  }

  const handleAddFormClose = () => {
    // alert('close')
    setIsShowAdd(false)
  }
  const SendAddCommodityRequest = async (Data) => {
    // supplier:req.body.user,
    // commodityname:req.body.commodityname,
    // content:req.body.content

    try {
      //build post request params
      const params = {
        method: 'POST',
        body: JSON.stringify({ user: Data['user'], commodityname: Data['commodityname'], content: Data['content'] }),
        headers: { 'Content-Type': 'application/json' },
      }
      const createResponse = await fetch(CREATE_COMMODITY_URL, params)
      const newData = await createResponse.json()
      //process register request response
      const code = newData['status']
      if (code === 200) {
        alert("Create commodity successfully!")

      } else {
        alert(newData['message'])
      }
      console.log(newData)
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
          <Button variant="contained" onClick={handleAddFormClick}>Add new commodity</Button>
        </div>
        <div className='flexbox-centering'>
          <TitlebarImageList />
        </div>

        <Dialog
          open={isShowAdd}
          onClose={handleAddFormClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Edit Commodity"}
          </DialogTitle>
          <DialogContent>
            <CommodityEditText title={title} setTitle={setTitle} content={content} setContent={setContent} ></CommodityEditText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleAddFormClose}>Cancel</Button>
            <Button onClick={handleAddFormSubmit} autoFocus>
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
      </article>
    </div>
  )
}
export default MyCommodity