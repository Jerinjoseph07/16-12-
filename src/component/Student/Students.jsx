import { Button, MenuItem, Select, TextField } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'

const Students = () => {

        var [inputs,setInputs]=useState({
          "Admno":'',
          "Name":'',
          "Age":'12',
          "Course":'BCA',
        });
      
  const inputHandler =(event) =>{
    const {name,value}=event.target
    setInputs((inputs)=>({...inputs,[name]:value}))
    console.log(inputs)
  }
  const addHandler=() =>{
    axios.post("http://localhost:3005/new",inputs)
    .then((Response)=>{
      alert("record saved")
    })
      .catch(err=>console.log(err))
    }
  return (
    <div>
       <TextField  label="Admission Number" name="Admno" variant="outlined" value={inputs.Admno} onChange={inputHandler} /> <br />
       <TextField id="outlined-basic" label="Name" name="Name" variant="outlined" value={inputs.Name} onChange={inputHandler} /><br />
     <TextField id="outlined-basic" label="age" name="Age" variant="outlined" value={inputs.Age} onChange={inputHandler}/><br />

  <Select labelId="demo-simple-select-label" value={inputs.Course} onChange={inputHandler} label="Course" >
    <MenuItem value="BSC">BSC</MenuItem>
    <MenuItem value="BCA">BCA</MenuItem>
    <MenuItem value="BCOM">Bcom</MenuItem>
  </Select>
  <Button variant="contained" onClick={addHandler}>OK</Button>
    </div>
  )
}

export default Students
