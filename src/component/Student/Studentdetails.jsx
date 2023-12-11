import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Studentdetails = () => {
    var[Students,setStudents]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3005/view")
        .then(response=>{
            setStudents(response.data)
    })
    .catch(err=>console.log(err))
    })

  return (
    <div>
       <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Admission Number</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Course</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {Students.map((row,pos) => (
            <TableRow
              key={pos}
              
            >
              
              
              <TableCell>{row.Admno}</TableCell>
              <TableCell>{row.Name}</TableCell>
              <TableCell>{row.Age}</TableCell>
              <TableCell>{row.Course}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default Studentdetails
