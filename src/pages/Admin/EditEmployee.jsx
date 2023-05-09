import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { editProductByID, getProductByID } from '../../api/httprequests';
import { Box, Button, TextField } from '@mui/material';

const EditEmployee = () => {
  const{id} = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState([]);
  useEffect(()=>{
    getProductByID(id).then(res=>{
      console.log(res)
      setEmployee(res)
    })
  },[id])
  function handleSubmit(){
   editProductByID(id, employee);
   navigate('/admin/employees');
  }

  function handleChange(e){
    setEmployee({...employee, [e.target.name]:e.target.value})
  }
  return (
  <>
    {/* <form onSubmit={(e)=>handleSubmit(e)}>
      <input name='name' onChange={(e)=>handleChange(e)} value={employee.name} placeholder='employee name' type='text'/>
      <input name='age' onChange={(e)=>handleChange(e)} value={employee.age} placeholder='employee age' type='number' min='0' step='any'/>
      <button>Edit</button>
    </form> */}

    <Box
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
    >
      <h1 style={{textAlign:'center'}}>Edit Employee</h1>
      <form  style={{textAlign:'center'}} onSubmit={(e)=>handleSubmit(e)} >
        
      <TextField
          name='name' onChange={(e)=>handleChange(e)} value={employee.name} placeholder='employee name' type='text'
         
          id="outlined-required"
          
        />
        <br/>
        <TextField
          name='surname' onChange={(e)=>handleChange(e)} value={employee.surname} placeholder='employee surname' type='text' 
         
          id="outlined-required"
          
        />
        <br/>
        <TextField
          name='age' onChange={(e)=>handleChange(e)} value={employee.age} placeholder='employee age' type='number' min='0' step='any'
          
          id="outlined-required"
          
        />
         <br/>
         <TextField
          name='salary' onChange={(e)=>handleChange(e)} value={employee.salary} placeholder='employee salary' type='number' min='0' step='any'
         
          id="outlined-required"
          
        />
         
         <br/>
         <TextField
          name='position' onChange={(e)=>handleChange(e)} value={employee.position} placeholder='employee position' type='text' 
        
          id="outlined-required"
          
        />
         <br/>

         <button style={{padding:'10px 40px', backgroundColor:'hotpink', border:'none', borderRadius:'5px', cursor:'pointer', color:'white', marginBottom:'20px'}}>Edit</button>

      </form>
      
      
    </Box>
    
    </>
  )
}

export default EditEmployee