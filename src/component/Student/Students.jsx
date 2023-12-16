import { Button, MenuItem, Select, TextField } from '@mui/material'
// import axios from 'axios';
import React, { useState } from 'react'


const Students = () => {

        var [inputs,setInputs]=useState({
          "Admno":'',
          "Name":'',
          "Age":'12',
          "Course":'BCA',
          });

        var [selectedimage,setSelectedimage]=useState(null);
      
  const inputHandler =(event) =>{
    const {name,value}=event.target
    setInputs((inputs)=>({...inputs,[name]:value}))
    console.log(inputs)
  }
  
  const Handleimage=(event)=>{
    const file=event.target.files[0];
    setSelectedimage(file)
    inputs.image1=file;

  }
  // const addHandler=() =>{
    // axios.post("http://localhost:3005/new",inputs)
    // .then((Response)=>{
      // alert("record saved")
    // })
      // .catch(err=>console.log(err))
    // }

    const saveData=()=>{
      const formdata= new FormData();
      formdata.append('Admno',inputs.Admno);
      formdata.append('Name',inputs.Name);
      formdata.append('Age',inputs.Age);
      formdata.append('Course',inputs.Course);
      formdata.append('image1',selectedimage);
      fetch('http://localhost:3005/new',{
        method:'post',
      body:formdata,
      })
    
    .then((response)=>response.json())
    .then((data)=>{

          alert("Record saved")

        })
        .catch((err)=>{
          console.log("error")
        })
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
  <br></br>
  <label>Choose file to upload</label>
  <input type="file" onChange={Handleimage}></input>
  <br></br>
  <Button variant="contained" onClick={saveData}>OK</Button>
    </div>
  )
}

export default Students
