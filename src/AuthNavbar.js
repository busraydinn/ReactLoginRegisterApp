import React from "react";
import { Outlet,Link } from "react-router-dom";
import Footer from "./Footer";
import weblogo from "./weblogo.png";
import "./styles/auth.css";
function AuthNavbar(){
    return(
            <div>
                <div className="auth-header">
                <Link to="/"><img src={weblogo} alt="weblogo"></img></Link>
                </div>
                <div className="auth-body">
                <Outlet/>
                </div>
                <div className="auth-footer">
                <Footer/>
                </div>
           
        </div>
    )
}
export default AuthNavbar;