import React, { useEffect, useRef, useState } from 'react'
import { getAllProducts } from '../../api/httprequests'
import { Card, Col, Row } from 'antd'
import Search from '../Main/components/Search'
import { Link } from 'react-router-dom'

const EmployeesList = () => {
  let [employees, setEmployees] = useState([])
  const storage = useRef([])

  useEffect(()=>{
    getAllProducts().then(data=>{
      console.log(data)
      setEmployees(data)
      storage.current = data;
    })
  },[])

  return (
<>
<h1 style={{textAlign:'center', color:'red'}}>EmployeesList</h1>

<Search storage={storage} setEmployees={setEmployees}/>

<Row   style={{width:'80%', margin:'0 auto'}} gutter={[20, 30]}>

{employees && employees.map((post)=>( 
 <Col  className="gutter-row" span={6} xs={24} sm={24} md={12} lg={6}>
<Card style={{height:'400px'}} hoverable key={post.id}>
    <p> {post.id}</p>
    <h3><i>Name:</i><Link to={`${post.id}`}>{post.name}</Link></h3>
    <h3><i>Surname:</i> {post.surname}</h3>
    <p><i>Age:</i> {post.age}</p>
    <p><i>Salary:</i> {post.salary}</p>
    <p><i>Position:</i> {post.position}</p>
    <button>Add to Favourites</button>
    {/* <p><b>ID:</b>{post.id}</p> */}
</Card>
</Col> 

 ))}

</Row>

           
         
</>
    
    
    
  )
}

export default EmployeesList