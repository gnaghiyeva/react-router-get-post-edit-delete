import { AppBar, Box, IconButton, Toolbar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { Button, Typography } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
   {/* <ul>
    <li><Link to='/'>Main Side</Link></li>
    <li><Link to='/admin'>Dashboard</Link></li>
    <li><Link to='/admin/employees'>Employees</Link></li>
    <li><Link to='/admin/add-employee'>Add New Employee</Link></li>
   </ul> */}

<Box sx={{ flexGrow: 1 }}>
<AppBar position="static">
  <Toolbar>
    <IconButton
      size="large"
      edge="start"
      color="inherit"
      aria-label="menu"
      sx={{ mr: 2 }}
    >
      <MenuIcon/>
    </IconButton>
    <ul style={{display:'flex', flexDirection:'row', listStyle:'none', gap:'20px',  }}>
    <li ><Link style={{color:'white', textDecoration:'none'}} to='/'>Main Side</Link></li>
    <li><Link style={{color:'white', textDecoration:'none'}} to='/admin'>Dashboard</Link></li>
    <li><Link style={{color:'white', textDecoration:'none'}} to='/admin/employees'>Employees</Link></li>
    <li><Link style={{color:'white', textDecoration:'none'}} to='/admin/add-employee'>Add New Employee</Link></li>
   </ul>
  
  </Toolbar>
</AppBar>
</Box>
</>
  )
}

export default Navbar