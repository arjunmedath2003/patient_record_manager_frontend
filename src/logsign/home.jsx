import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Cookie from "js-cookie";
import "./home.css"


function Home() {
  
  const navigate = useNavigate();
  
  const [value, setValue] = useState([]);
  const [Search, setSearch] = useState("");
  
  const disp = value.filter(f => f.name.toLowerCase().includes(Search.toLowerCase()) || f.age.includes(Search.toLowerCase()) || f.patientid.includes(Search.toLowerCase()));
  
  useEffect(()=>{
    const token = Cookie.get("token");
    if(token === undefined){
      console.log(token,"  yes");
      navigate("/logout")
    }
    else{
      const data = token;
      axios.post("http://localhost:8010/display",{data})
      .then(response => {
        setValue(response.data);
      });
    }
  })
  
  const hancleClick = (e)=>{
    const token = Cookie.get("token");
    const data = {
      id : e,
      value: token,
    }
    axios.post("http://localhost:8010/submitpatient", data)
    .then(response => {
      if(response.data === "success"){
        navigate("/patient");
      }
    })
  }
  
  const logout=()=>{
    try {
      Cookie.remove("token");
      navigate("/logout");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="home">
      <div className="navigation">
        <button onClick={logout} className="button">Logout</button>
      </div>
      <div className="search-bar">
        <label>Search:</label>
        <input type="text" onChange={(e) => setSearch(e.target.value)} />
      </div>
      <div className="scrolltable">
        <table className="table">
          <thead>
            <tr>
              <th>Patient Id</th>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {disp.map((value) => (
              <tr key={value.patientid} onClick={() => hancleClick(value.patientid)}>
                <td>{value.patientid}</td>
                <td>{value.name}</td>
                <td>{value.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button onClick={() => navigate('/add')} className="add-button">Add</button>
    </div>
  )
}

export default Home;