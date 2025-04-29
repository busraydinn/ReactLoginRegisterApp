import React from "react";
import { Link } from "react-router-dom";
import "./styles/register.css";
function Register(){
    return(
        <div className="register-layout">
            <div className="register">
            <div className="register-header">
                 <h2>SPACE APP KAYIT</h2>
                 <Link to="/">Giriş Yap ?</Link>
            </div>
            <div className="register-body">
                <form>
                   <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" placeholder="email"></input>
                   </div>
                   <div>
                    <label htmlFor="password">Şifre</label>
                    <input type="password"></input>
                   </div>
                   <div>
                    <label htmlFor="password">Şifre Tekrar(*)</label>
                    <input type="password"></input>
                   </div>
                   <div>
                    <button type="submit">Kayıt Ol</button>
                   </div>
                </form>
            </div>
           
            </div>

        </div>
    )
}
export default Register;