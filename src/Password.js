import React from "react";
import { Link } from "react-router-dom";
import "./styles/reset.css";
function Password(){
    return(
        <div className="reset-layout">
            <div className="reset">
            <div className="reset-header">
                 <h2>SPACE APP ŞİFRE YENİLE</h2>
                 <Link to="/">Giriş Yap ?</Link>
            </div>
            <div className="reset-body">
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
                    <button type="submit">Şifre Yenile</button>
                   </div>
                </form>
            </div>
           
            </div>

        </div>
    )
}
export default Password;