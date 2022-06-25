// import React, { useState } from 'react'
// import Button from '@mui/material/Button'

// import ImageList from '@mui/material/ImageList'
// import ImageListItem from '@mui/material/ImageListItem'
// import ImageListItemBar from '@mui/material/ImageListItemBar'
// import ListSubheader from '@mui/material/ListSubheader'
// import IconButton from '@mui/material/IconButton'
// import InfoIcon from '@mui/icons-material/Info'
// import FormControl from '@mui/material/FormControl'
// import InputLabel from '@mui/material/InputLabel'
// import Input from '@mui/material/Input'
// import FormHelperText from '@mui/material/FormHelperText'
// import Box from '@mui/material/Box'
// import List from '@mui/material/List'
// import ListItem from '@mui/material/ListItem'
// import ListItemButton from '@mui/material/ListItemButton'
// import ListItemIcon from '@mui/material/ListItemIcon'
// import ListItemText from '@mui/material/ListItemText'
// import Divider from '@mui/material/Divider'
// import InboxIcon from '@mui/icons-material/Inbox'
// import DraftsIcon from '@mui/icons-material/Drafts'

// function Update () {

//     const [name, setName] = useState()
//     const [address, setAddress] = useState()
//     const [email, setEmail] = useState()
//     const [phone, setPhone] = useState()


//     const nameUpdate = (event) => { // Dealing with name field changes to update our state
//         console.log(event.target.value)
//         setName(event.target.value)
//     }
//     const addressUpdate = (event) => { // Dealing with name field changes to update our state
//         console.log(event.target.value)
//         setAddress(event.target.value)
//     }
//     const emailUpdate = (event) => { // Dealing with name field changes to update our state
//         console.log(event.target.value)
//         setEmail(event.target.value)
//     }
//     const phoneUpdate = (event) => { // Dealing with name field changes to update our state
//         console.log(event.target.value)
//         setPhone(event.target.value)
//     }


//     const handleSubmit = () => { // Once the form has been submitted, this function will post to the backend
//         console.log("submit clicked")
//         const postURL = "http://localhost:4000/api/staff/" //Our previously set up route in the backend
//         fetch(postURL, {
//             method: 'POST',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ // We should keep the fields consistent for managing this data later
//                 name: name,
//                 address: address,
//                 email: email,
//                 phone: phone
//             })
//         })
//             .then(() => {
//                 // Once posted, the user will be notified 
//                 alert('Change Successfully')
//             })
//     }

//     const clickHandler = () => {
//         console.log('事件被触发了')
//     }

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <label>UserName:</label>
//                 <input required onChange={nameUpdate}></input>
//                 <br />
//                 <label>Email:</label>
//                 <input required onChange={emailUpdate}></input>
//                 <br />
//                 <label>Address:</label>
//                 <input required onChange={addressUpdate}></input>
//                 <br />
//                 <label>Phone:</label>
//                 <input required onChange={phoneUpdate}></input>
//                 <br />
//                 <button variant="contained" > Submit</button>
//             </form>
//             <Button variant="contained" onClick={handleSubmit} > Submit2</Button>

//             <FormControl onClick={clickHandler}>

//                 <InputLabel htmlFor="Email">Email address</InputLabel>
//                 <Input id="my-input" aria-describedby="my-helper-text" />
//                 <InputLabel htmlFor="Email">User</InputLabel>
//                 <Input id="my-input" aria-describedby="my-helper-text" />
//                 <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
//                 <Button variant="contained" > Submit3</Button>
//             </FormControl>
//             <List>
//                 <ListItemButton>
//                     <ListItemText primary="Email" />
//                     <InputLabel htmlFor="Email">Email address</InputLabel>
//                     <Input id="my-input" aria-describedby="my-helper-text" />
//                 </ListItemButton>
//                 <ListItemButton>
//                     <ListItemText primary="Spam2" />
//                 </ListItemButton>
//             </List>
//         </div>
//     )

// }

// export default Update

import React, { useState } from "react"
import Grid from "@mui/material/Grid"
import TextField from "@mui/material/TextField"
import FormControlLabel from "@mui/material/FormControlLabel"
import FormControl from "@mui/material/FormControl"
import FormLabel from "@mui/material/FormLabel"
import RadioGroup from "@mui/material/RadioGroup"
import Radio from "@mui/material/Radio"
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
import Slider from "@mui/material/Slider"
import Button from '@mui/material/Button'
import Input from '@mui/material/Input'
import { useForm, Controller } from "react-hook-form"
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input"
import "react-phone-number-input/style.css"
import { NaviBar } from './NaviBar'
import CommodityList from './CommodityList'
import ReactPhoneInput from 'react-phone-input-material-ui'
import { Tabs, Tab } from '@mui/material'
import Phone from './Phone'

const defaultValues = {
    userName: "",
    phone: "",
    address: "",
    // age: "",
    // gender: "",
    // os: "",
    // favoriteNumber: 0,
}
const Update = () => {
    const [formValues, setFormValues] = useState(defaultValues)
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormValues({
            ...formValues,
            [name]: value,
        })
    }
    // const handleSliderChange = (name) => (e, value) => {
    //     setFormValues({
    //         ...formValues,
    //         [name]: value,
    //     })
    // }
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(formValues)
    }

    const styles = {
        paper: {
            marginTop: 1.0
        }
    }

    return (
        <>
            <NaviBar />
            <form margin="normal" onSubmit={handleSubmit} >
                <Grid container margin="normal" spacing={2} alignItems="center" justify="center" direction="column">
                    <Grid item>
                        <TextField margin="normal" required
                            id="name-input"
                            name="userName"
                            label="userName"
                            type="text"
                            value={formValues.userName}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item>
                        <TextField required
                            id="phone-input"
                            name="phone"
                            label="phone"
                            type="text"
                            value={formValues.phone}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            id="phone-input"
                            name="phone"
                            label="phone"
                            type="text"
                        >
                            <Phone></Phone>
                        </TextField>
                    </Grid>
                    <Grid item>
                        <TextField required
                            id="address-input"
                            name="address"
                            label="address"
                            type="text"
                            value={formValues.address}
                            onChange={handleInputChange}
                        />
                    </Grid>


                    {/* <Grid item>
                    <TextField
                        id="age-input"
                        name="age"
                        label="Age"
                        type="text"
                        value={formValues.age}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item>
                    <FormControl>
                        <FormLabel>Gender</FormLabel>
                        <RadioGroup
                            name="gender"
                            value={formValues.gender}
                            onChange={handleInputChange}
                            row
                        >
                            <FormControlLabel
                                key="male"
                                value="male"
                                control={<Radio size="small" />}
                                label="Male"
                            />
                            <FormControlLabel
                                key="female"
                                value="female"
                                control={<Radio size="small" />}
                                label="Female"
                            />
                            <FormControlLabel
                                key="other"
                                value="other"
                                control={<Radio size="small" />}
                                label="Other"
                            />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item>
                    <FormControl>
                        <Select
                            name="os"
                            value={formValues.os}
                            onChange={handleInputChange}
                        >
                            <MenuItem key="mac" value="mac">
                                Mac
                            </MenuItem>
                            <MenuItem key="windows" value="windows">
                                Windows
                            </MenuItem>
                            <MenuItem key="linux " value="linux">
                                Linux
                            </MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item>
                    <div style={{ width: "400px" }}>
                        Favorite Number
                        <Slider
                            value={formValues.favoriteNumber}
                            onChange={handleSliderChange("favoriteNumber")}
                            defaultValue={1}
                            step={1}
                            min={1}
                            max={3}
                            marks={[
                                {
                                    value: 1,
                                    label: "1",
                                },
                                {
                                    value: 2,
                                    label: "2",
                                },
                                {
                                    value: 3,
                                    label: "3",
                                },
                            ]}
                            valueLabelDisplay="off"
                        />
                    </div>
                </Grid> */}

                    <Button variant="contained" color="primary" type="submit">
                        Submit
                    </Button>
                </Grid>
            </form>
            <Phone>

            </Phone>

        </>

    )
}
export default Update

