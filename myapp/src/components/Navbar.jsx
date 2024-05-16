import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
            
                <Typography variant="h3">Home</Typography>&nbsp;
                <Button variant="contained">
                <Link to='/reg' >Signup</Link>
                </Button>
                <Button variant="contained">
                <Link to='/u' >state</Link>
                </Button>
                <Button variant="contained">
                <Link to='/i' >use</Link>
                </Button>
                
                <Button variant="contained">
                <Link to='/c' >counter</Link>
                </Button>
                <Button variant="contained">
                <Link to='/v' >viewdata</Link>
                </Button>
            </Toolbar>
            </AppBar>
    </div>
  )
}
export default Navbar