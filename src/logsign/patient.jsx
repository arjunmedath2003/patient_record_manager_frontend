import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import "./patient.css"

function Patient() {
  const navigate = useNavigate();
  const [value, setValue] = useState({});
  useEffect(() => {
    axios.get("http://localhost:8010/displaypatient").then((response) => {setValue(response.data)});
  })
  return (
    <div className="patient-container">
      <div className="patient-card">
        <h2>Patient Information</h2>
        <p><strong>Patient Id:</strong> {value.patientid}</p>
        <p><strong>Name:</strong> {value.name}</p>
        <p><strong>Age:</strong> {value.age}</p>
        <p><strong>Email:</strong> {value.email}</p>
        <p><strong>Phone number:</strong> {value.phone}</p>
        <p><strong>Blood Group:</strong> {value.blood}</p>
        <p><strong>Room number:</strong> {value.roomno}</p>
        <p><strong>Doctor name:</strong> {value.doctor}</p>
        <button onClick={() => { navigate("/"); }}>Back</button>
      </div>
    </div>
  )
}

export default Patient