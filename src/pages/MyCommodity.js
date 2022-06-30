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
function MyCommodity () {

  const [isShowAdd, setIsShowAdd] = React.useState(false)
  const handleAddFormClick = () => {
    // alert('Click')
    setIsShowAdd(true)
  }
  const handleAddFormSubmit = () => {
    // alert('Submit')
    setIsShowAdd(false)
    const title = document.getElementById('Commodity_EditText')
    const content = document.getElementById('Commodity_EditText')
    console.log(title)
    // console.log(content.value)
    SendAddCommodityRequest()
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
        body: JSON.stringify({ user: Data.get('user'), commodityname: Data.get('commodityname'), content: Data.get('content') }),
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
            <CommodityEditText id="Commodity_EditText"></CommodityEditText>
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