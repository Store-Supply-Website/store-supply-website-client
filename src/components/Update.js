import React, { UseState }  from 'react'

export const Update= ()=> {

    var [name,setName]=UseState()
    var [address,setAddress]=UseState()
    var [email,setEmail]=UseState()
    var [phone,setPhone]=UseState()
    
    
    
    const nameUpdate=(event)=>{ // Dealing with name field changes to update our state
        setName(event.target.value)
    }
    const addressUpdate=(event)=>{ // Dealing with name field changes to update our state
        setAddress(event.target.value)
    }
    const emailUpdate=(event)=>{ // Dealing with name field changes to update our state
        setEmail(event.target.value)
    }
    const phoneUpdate=(event)=>{ // Dealing with name field changes to update our state
        setPhone(event.target.value)
    }


    const handleSubmit=()=> { // Once the form has been submitted, this function will post to the backend
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
                email:email,
                phone:phone
            })
        })
        .then(()=>{
            // Once posted, the user will be notified 
            alert('Change Successfully');
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>UserName:</label>
                <label>Email:</label>
                <label>Address:</label>
                <label>Phone:</label>
                <input required onChange={nameUpdate}></input>
                <input required onChange={emailUpdate}></input>
                <input required onChange={addressUpdate}></input>
                <input required onChange={phoneUpdate}></input>
                <button type="submit"> Submit</button>
            </form>
        </div>
    )
    
}

export default Update

//>