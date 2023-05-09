import { TextField } from '@mui/material';
import React from 'react'

const Search = ({storage,setEmployees}) => {
    
  function handleChange(e){
    console.log(storage.current.filter(x=>x.name.includes(e.target.value))) 
    setEmployees(storage.current.filter(x=>x.name. toLowerCase().trim().includes(e.target.value.toLowerCase().trim()))); 
  }
  return (
    <div style={{width:'20%', margin:'0 auto'}}>
    <TextField onChange={(e)=>handleChange(e)} id="outlined-basic" label="search items" variant="outlined"/>
    </div>
  )
}

export default Search