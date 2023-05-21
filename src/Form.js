import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';

function Form(){
    
    const data = {name:"",email:"",password:""};
    const [inputData, setInputData]=useState(data)
    const [flag, setFlag] = useState(false)
     useEffect(()=>{
        console.log("Registered")
     },[flag])

    function handleData(e){

        setInputData({...inputData,[e.target.name]:e.target.value})
        console.log(inputData)
    }

    function handleSubmit(e){
        e.preventDefault();
        if(!inputData.name || !inputData.email || !inputData.password){

            alert("All fields are Mandatary")
        }
        else{
            setFlag(true)
        }
    }
    
    return(
        <>
        <div className="container">
        {(flag)?<h2 className='container ui-define'>Hello {inputData.name}, You've Registered Successfully </h2>:""}
        </div>
        <form className="container" onSubmit={handleSubmit}>
        <div className="header">

            <h1> Registration Form </h1>


        </div>
         <br></br>
        <div>
            <input type="text" placeholder="Enter Your Name" name="name" value={inputData.name} onChange={handleData}></input>
        </div>

        <div>
            <input type="text" placeholder="Enter Your Email" name="email" value={inputData.email} onChange={handleData}></input>
        </div>

        <div>
            <input type="text" placeholder="Enter Your Password" name="password" value={inputData.password} onChange={handleData}></input>
        </div>
        <br></br>
         <div>
         <Button variant="info" type="submit">Submit</Button>
         </div>
          <br></br>
        </form>
        </>
    )
}

export default Form;