import React from "react";
import SignUp from "./logsign/signup";
import Login_page from "./logsign/login";
import Home from "./logsign/home";
import Add from "./logsign/add";
import Patient from "./logsign/patient";
import Homelogout from "./logsign/homelogout";
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login_page />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/' element={<Home />}></Route>
        <Route path='/add' element={<Add />}></Route>
        <Route path='/patient' element={<Patient />}></Route>
        <Route path='/logout' element={<Homelogout />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;