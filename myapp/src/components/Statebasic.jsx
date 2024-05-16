import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Statebasic = () => {
  var[name,fname]=useState("shajila")
  var[val,setval]=useState()
  var[sub,setsub]=useState()
  const handleInput=(e)=>{
    setval(e.target.value);
    

  }
  const submitHandler=()=>{
    console.log("clicked")
    setsub(val)
  }
  return (
    <div ><br/><br /><br /><br /><br /><br /><br />
      <Typography varient='h6'>welcome to {sub}</Typography>
      <TextField variant="outlined" onChange={handleInput}/>
      <Button variant="contained"onClick={submitHandler}>submit</Button>
      
    </div>
  )
}

export default Statebasic