import { AppBar, Box, IconButton, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (
    <>
    
    {/* <ul>
      <li><Link to='admin'>Admin Panel</Link></li>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/employees'>Employees</Link></li>
      <li><Link to='/about'>Employee Detail</Link></li>
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
      <li><Link style={{color:'white', textDecoration:'none'}} to='admin'>Admin Panel</Link></li>
      <li><Link style={{color:'white', textDecoration:'none'}} to='/'>Home</Link></li>
      <li><Link style={{color:'white', textDecoration:'none'}} to='/employees'>Employees</Link></li>
      <li><Link style={{color:'white', textDecoration:'none'}} to='/about'>Employee Detail</Link></li>
    </ul>
  
  </Toolbar>
</AppBar>
</Box>
</>
  )
}

export default Navbar