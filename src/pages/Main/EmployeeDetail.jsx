import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getProductByID } from '../../api/httprequests';
import { Button } from '@mui/material';
const EmployeeDetail = () => {
  const{id} = useParams();
  const [employee, setEmployee] = useState({})
  console.log(id)
  useEffect(()=>{
   getProductByID(id).then(res=>{
    setEmployee(res);
   })
  },[])
  return (
   <>
   <h1>Detail page of {employee.name} </h1>
   <ul>
   <li>Employee ID: {employee.id}</li>
    <li>Employee Name: {employee.name}</li>
    <li>Employee Surname: {employee.surname}</li>
    <li>Employee age: {employee.age}</li>
    <li>Employee Salary: {employee.salary}</li>
    <li>Employee position: {employee.position}</li>
   </ul>
   <Button variant='outlined'><Link style={{textDecoration:'none', color:'black'}} to='/employees'>Go Back</Link></Button>
   </>
  )
}

export default EmployeeDetail