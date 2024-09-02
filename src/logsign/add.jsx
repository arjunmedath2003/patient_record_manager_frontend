import axios from 'axios';
import Cookie from "js-cookie";
import React,{useState} from 'react'
import {useNavigate} from "react-router-dom";
import "./add.css"

function Add() {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        patientid: "",
        name: "",
        age: "",
        email: "",
        phone: "",
        blood: "",
        doctor: "",
        roomno: "",
        hid: Cookie.get("token"),
    })

    const handleInput=(e)=>{
        e.preventDefault();
        setInput({...input,[e.target.name]:e.target.value});
    }

    const handlesubmit=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:8010/add",input)
        .then(res => {
            if(res.data == "yes") {
                navigate("/");
            }
            else{
                console.log(res.data);
            }
        })
    }

  return (
    <div className="form-container">
        <form className="add-form" onSubmit={handlesubmit}>
            <h2>Add Patient</h2>
            <label>Patient Id: </label>
            <input type="text" name="patientid" onChange={handleInput} required/><br />
            
            <label>Name: </label>
            <input type="text" name="name" onChange={handleInput} required/><br />
            
            <label>Age: </label>
            <input type="text" name="age" onChange={handleInput} required/><br />
            
            <label>Email: </label>
            <input type="email" name="email" onChange={handleInput} required/><br />
            
            <label>Phone Number: </label>
            <input type="text" name="phone" onChange={handleInput} required/><br />
            
            <label>Blood Group: </label>
            <select name="blood" onChange={handleInput} required>
                <option value="">Select</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
            </select><br />
            
            <label>Doctor: </label>
            <input type="text" name="doctor" onChange={handleInput} required/><br />
            
            <label>Room No: </label>
            <input type="text" name="roomno" onChange={handleInput} required/><br />
            
            <button type="submit">Add Patient</button>
        </form>
    </div>
  )
}

export default Add