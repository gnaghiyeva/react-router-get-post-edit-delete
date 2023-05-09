import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { postProduct } from '../../api/httprequests';
import { useNavigate } from 'react-router-dom';
import { Box, Button, TextField } from '@mui/material';
import { Form } from 'antd';
const AddEmployee = () => {
  const [newEmployee, setNewEmployee] = useState({})
  const navigate = useNavigate()

  function handleSubmit(e){
    e.preventDefault();
    newEmployee.id=uuidv4()
    // console.log(newEmployee)
    postProduct(newEmployee);
    navigate('/admin/employees')

  }

  function handleChange(e){
   setNewEmployee({...newEmployee, [e.target.name]:e.target.value})
  }
  return (
    // <form onSubmit={(e)=>handleSubmit(e)}>
    //   <input name='name' onChange={(e)=>handleChange(e)} placeholder='employee name' type='text' required/>
    //   <input name='surname' onChange={(e)=>handleChange(e)} placeholder='employee surname' type='text' required/>
    //   <input name='age' onChange={(e)=>handleChange(e)} placeholder='age' type='number' min='0'/>
    //   <input name='salary' onChange={(e)=>handleChange(e)} placeholder='employee salary' type='number' required/>
    //   <input name='position' onChange={(e)=>handleChange(e)} placeholder='employee position' type='text' required/>
    //   <button type='submit'>Add new Employee</button>
    // </form>

    <>
    <h1 style={{textAlign:'center'}}>Adding New Employee</h1>
    <Box
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
    >
      
      <form style={{textAlign:'center'}}onSubmit={(e)=>handleSubmit(e)} >
        
      <TextField
          name='name' onChange={(e)=>handleChange(e)} placeholder='employee name' type='text'
          required
          id="outlined-required"
          label="Required"
        />
        <br/>
        <TextField
          name='surname' onChange={(e)=>handleChange(e)} placeholder='employee surname' type='text'
          required
          id="outlined-required"
          label="Required"
        />
         <br/>
           <TextField
          name='age' onChange={(e)=>handleChange(e)} placeholder='age' type='number' min='0'
          required
          id="outlined-required"
          label="Required"
        />
         <br/>
           <TextField
         name='salary' onChange={(e)=>handleChange(e)} placeholder='employee salary' type='number'
          required
          id="outlined-required"
          label="Required"
        />
         <br/>
        <TextField
        name='position' onChange={(e)=>handleChange(e)} placeholder='employee position' type='text'
          required
          id="outlined-required"
          label="Required"
        />
         <br/>

        <Button style={{marginBottom:'20px'}} type='submit' variant="contained">Add new Employee</Button>
      </form>
      
      
    </Box>
    </>
  )
}

export default AddEmployee