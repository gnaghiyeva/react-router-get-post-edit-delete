import React, { useEffect, useRef, useState } from 'react'
import { getAllProducts } from '../../api/httprequests'
import { Space, Table } from 'antd';
import { deleteProductByID } from '../../api/httprequests';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    sorter:(a,b)=>a.id-b.id,
    onFilter: (value, record) => record.name.includes(value),
    width: '30%',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    filters: [
      {
        text: 'Gulnar',
        value: 'Gulnar',
      },
      {
        text: 'Nigar',
        value: 'Nigar',
      },
      
    ],
    filterMode: 'tree',
    filterSearch: true,
    onFilter: (value, record) => record.name.includes(value),
    width: '30%',
  },
  {
    title: 'Surname',
    dataIndex: 'surname',
    filters: [
      {
        text: 'Naghiyeva',
        value: 'Naghiyeva',
      },     
    ],
    filterMode: 'tree',
    filterSearch: true,
    onFilter: (value, record) => record.surname.includes(value),
    onFilter: (value, record) => record.surname.includes(value),
    width: '30%',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Salary',
    dataIndex: 'salary',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Position',
    dataIndex: 'position',

    onFilter: (value, record) => record.name.includes(value),
    width: '30%',
  },
  {
    title: 'Delete',
    render:(emp)=>{
      return <Button
      variant="contained"
      
      onClick={()=>{
        deleteProductByID(emp.id)
        // let filteredProducts = emp.filter((item)=>item.id!==emp.id);
        // console.log(filteredProducts)
        // setEmp(filteredProducts)
      }}
      >Delete</Button>
    },

    width: '30%',
  },
  {
    title: 'Edit',
    render:(emp)=>{
      return <Button  color="success" variant="contained"><Link style={{color:'white',}} to={`/admin/employees/edit/${emp.id}`}>Edit</Link></Button>
    },
    width: '30%',
  },
];

const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};


const Employees = () => {
  const[emp,setEmp] = useState([]);

useEffect(()=>{
  getAllProducts().then(emp=>{
    console.log(emp)
    setEmp(emp)
  })
},[])
  

  

  return (
    <>
    <Space style={{display:'block', width:'80%', margin:'0 auto' }}>
    <h1 style={{textAlign:'center'}}>Data Table</h1>
    <Table columns={columns} dataSource={emp} onChange={onChange}  />
    </Space>
    </>
  )
}

export default Employees