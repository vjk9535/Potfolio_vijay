import React from 'react'
import { AppBar,Toolbar,Typography } from '@mui/material'
export default function Header() {
  return (
    <AppBar position="static" style={{textAlign:'center',backgroundColor:'#067b9c'}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{fontWeight:'bolder',fontSize:'30px'}}>
            Front-End Developer
          </Typography>
        </Toolbar>
      </AppBar>
  )
}
