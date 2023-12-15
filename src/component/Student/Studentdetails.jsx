import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import Studentedit from './Studentedit';

const Studentdetails = () => {
  var[selected,setSelected]=useState()
  var[update,setUpdate]=useState(false)
    var[Students,setStudents]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3005/view")
        .then(response=>{
            setStudents(response.data)
            console.log(response.data)
    })
    .catch(err=>console.log(err))
    })
    const updateValue=(row)=>{
      setSelected(row);
      setUpdate(true);
    }

  var result=
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
              <TableCell><EditIcon onClick={()=>updateValue(row)}></EditIcon></TableCell>
            </TableRow>
          
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    
  if(update)
  {
    result=<Studentedit data={selected} method='put'/>;
  }
    return result;
  
};
export default Studentdetails
