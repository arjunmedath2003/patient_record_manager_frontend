import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import "./home.css"

function Homelogout() {
    const navigate = useNavigate();
  return (
    <div className='navigation'>
        <button onClick={()=>navigate("/login")} className='button'>Login</button><br />
        <button onClick={()=>navigate("/signup")} className='button'>Signup</button><br />
    </div>
  )
}

export default Homelogout