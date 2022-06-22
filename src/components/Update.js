import React, { useState } from 'react'
import { Button } from '@mui/material'

export default function Update () {

    const [name, setName] = useState()
    const [address, setAddress] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()


    const nameUpdate = (event) => { // Dealing with name field changes to update our state
        console.log(event.target.value)
        setName(event.target.value)
    }
    const addressUpdate = (event) => { // Dealing with name field changes to update our state
        console.log(event.target.value)
        setAddress(event.target.value)
    }
    const emailUpdate = (event) => { // Dealing with name field changes to update our state
        console.log(event.target.value)
        setEmail(event.target.value)
    }
    const phoneUpdate = (event) => { // Dealing with name field changes to update our state
        console.log(event.target.value)
        setPhone(event.target.value)
    }


    const handleSubmit = () => { // Once the form has been submitted, this function will post to the backend
        const postURL = "http://localhost:4000/api/staff/" //Our previously set up route in the backend
        fetch(postURL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ // We should keep the fields consistent for managing this data later
                name: name,
                address: address,
                email: email,
                phone: phone
            })
        })
            .then(() => {
                // Once posted, the user will be notified 
                alert('Change Successfully')
            })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>

                <label>UserName:</label>
                <input required onChange={nameUpdate}></input>
                <br />
                <label>Email:</label>
                <input required onChange={emailUpdate}></input>
                <br />
                <label>Address:</label>
                <input required onChange={addressUpdate}></input>
                <br />
                <label>Phone:</label>
                <input required onChange={phoneUpdate}></input>
                <br />
                <button variant="contained" > Submit</button>
            </form>
            <button variant="contained" > Submit</button>

        </div>
    )

}

// export default Update

//>