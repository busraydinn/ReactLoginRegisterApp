import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import AuthNavbar from "./AuthNavbar";
import Password from "./Password";
import "./styles/styles.css";
function App(){
    return(
            <BrowserRouter>
                <Routes>
                   
                    <Route path="/" element={<AuthNavbar/>}>
                            <Route index element={<Login/>}></Route>
                            <Route path="/register" element={<Register/>}></Route>
                            <Route path="/reset" element={<Password/>}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
    )
}
export default App;