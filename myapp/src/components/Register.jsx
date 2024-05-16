import { Button, TextField } from '@mui/material'
import React from 'react'

const Register = () => {
  return (
    <div>
      <br /><br /><br /><br /><br /><br /><br /><br /><br />

        <TextField id="outlined-basic" label="user name" variant="outlined"/><br></br>
        <TextField id="outlined-basic" label="email" variant="outlined"/><br></br>
        <TextField id="outlined-basic" label="name" variant="outlined"/><br></br>
        <TextField id="outlined-basic" label="password" variant="outlined" type="password"/><br></br><br></br>
        <Button variant="contained">Signup</Button>
    

    </div>
  )
}

export default Register