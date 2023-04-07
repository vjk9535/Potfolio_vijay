import React from 'react'
import { AppBar,Toolbar,Typography } from '@mui/material'
export default function Footer() {
  return (
    <AppBar position="relative" style={{backgroundColor:'#067b9c',position:'absolute',bottom:'0px',left:'0px',width:'100%',textAlign:'center'}}>
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{fontSize:'20px'}}>
        Thank You For Visiting
      </Typography>
    </Toolbar>
  </AppBar>
  )
}
