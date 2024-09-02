import React,{useState} from "react";
import "./logcs.css";
import { Link,useNavigate } from "react-router-dom";
import Cookie from "js-cookie";
import axios from 'axios'

const Login_page = () => {
    const [input,setInput] = useState({
        email:"",
        password:""
    });

    const [error,setError] = useState("")
    const navigate = useNavigate();
    const takeinput=(event)=>{
        setInput({...input,[event.target.name]:event.target.value});
    }

    const submitfun=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:8010/login", input)
        .then(res => {
            if(res.data==="wrong"){
                setError("Wrong password");
            }
            else if(res.data==="empty"){
                setError("No such account");
            }
            else {
                try {
                    Cookie.set("token",res.data,{sameSite: "None"});
                    navigate("/");
                }
                 catch (error) {
                    console.log(error);
                }
            }
        })
    }

    return (
        <div className="login-body">
            <div className="box">
                <div className="login">Login</div>
                <div className="inputs">
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <label htmlFor="email" className="labelword">Email:</label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="email" name="email" placeholder="Enter email" className="input1"
                                        onChange={takeinput}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="password" className="labelword">Password:</label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="password" name="password" placeholder="Enter password" className="input1"
                                        onChange={takeinput}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p className="error">{error}</p>
                </div>
                <div className="submit">
                    <input type="button" value="Login" className="loginbutton" onClick={submitfun} />
                </div>
                <div className="change">
                    <p className="change">Don't have an account? 
                        <Link to="/signup" className="link">Create Account</Link>
                    </p>
                </div>
            </div>
        </div>
     );
}
 
export default Login_page;