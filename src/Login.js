import React from "react";
import { Link } from "react-router-dom";
import "./styles/login.css";
function Login(){
    return(
       <div className="login-layout">
         <div className="login">
            <div className="login-header">
                <h1>SPACE APP GİRİŞ YAP</h1>
                <Link to="/register">Kayıt Ol ?</Link>
            </div>
           
                <form className="login-form">
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="input" placeholder="email"></input>
                    </div>
                    <div>
                       
                        <label htmlFor="password">Şifre</label>
                        <div className="pass-item1">
                            <Link to="/reset">şifremi unuttum?</Link>
                        </div>
                        <input type="password" placeholder="şifre"></input>
                        
                    </div>
                    <div>
                       <button type="submit">Giriş Yap</button>
                    </div>
                </form>
          
         </div>
       </div>
    )
}
export default Login;