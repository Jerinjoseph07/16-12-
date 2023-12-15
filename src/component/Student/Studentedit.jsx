import { Button, MenuItem,Select,TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'


const Studentedit = (props) => {
    var [inputs,setInputs]=useState(props.data)
    
    const inputHandler =(event) =>{
        const {name,value}=event.target;
        setInputs((inputs)=>({...inputs,[name]:value}));
        console.log(inputs);
      };
      const addHandler=()=>{
        if(props.method==="put")
        {
            axios.put("http://localhost:3005/edit/"+inputs._id,inputs)
            .then(response=>{
                alert("record updated")
                window.location.reload(false);


            })
            .catch(err=>console.log(err))
        }
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
  );
};

export default Studentedit
