import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Use = () => {
    var[x,setx]=useState()
    const React=()=>{
        setx("React")
    }
    const angular=()=>{
        setx("angular")
    }
    const node=()=>{
        setx("node")
    }
    useEffect(()=>{React();},[])



  return (
    <div>
        <br></br><br></br><br></br><br></br>
        <Typography>welcome to {x} </Typography>
        <Button variant="contained" color="success" onClick={React}>react</Button>&nbsp;&nbsp;
        <Button variant="contained" color="success" onClick={angular}>angular</Button>&nbsp;&nbsp;
        <Button variant="contained" color="success" onClick={node}>node</Button>&nbsp;&nbsp;
    </div>


  )
}

export default Use