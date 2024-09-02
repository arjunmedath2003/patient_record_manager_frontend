import React,{ useState } from "react";
import "./logcs.css";
import { Link , useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
    
    const [values,setValues]=useState({
        name:"",
        email:"",
        password:""
    });
    const [error,setError]= useState("");
    const navigate=useNavigate();

    const handleInput=(e)=>{
        setValues(prev=>({
            ...prev,[e.target.name]:e.target.value
        }));
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:8010/signup", values)
        .then(result =>{
            console.log(result.data);
            if(result.data==="Error"){
                console.log("ayyo");
                setError("Error");
            }
            else{
                setError("");
                navigate("/login");
            }
        });
    }

    return ( 
        <div className="login-body">
            <div className="box">
                <div className="login">Signup</div>
                <div className="inputs">
                    <table>
                        <tr>
                            <td>
                                <label htmlFor="text" className="labelword">Name:</label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="text" onChange={handleInput} name="name" placeholder="Enter name" className="input1"/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="email" className="labelword">Email:</label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="email" onChange={handleInput} name="email" placeholder="Enter email" className="input1"/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="password" className="labelword">Password:</label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="password" onChange={handleInput} name="password" placeholder="Enter password" className="input1"/>
                            </td>
                        </tr>
                        <p className="error">{error}</p>
                    </table>
                </div>
                <div className="submit">
                    <input type="button" value="Signup" className="button" onClick={handleSubmit}/>
                </div>
                <div className="change">
                    <p className="">You already have account?
                    <Link to="/login" className="link">Login</Link>
                    </p>
                </div>
            </div>
        </div>
     );
}
 
export default SignUp;