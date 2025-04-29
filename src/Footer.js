import React from 'react'
import footerlogo from "./footer.png";
import  "./styles/footer.css";
function Footer() {
  return (
    <div className='footer-layout'>
        <div className='footer-header'>
        <img src={footerlogo} alt='footerlogo'></img>
        </div>
        <div className='footer-body'>
                <div className='footer-body-item1'>
                    <h1>İletişim</h1>
                    <div className='footer-communication'> 
                      <h3>Linkedn</h3>
                      <h3>Github</h3>
                      <h3>mail address</h3>
                    </div>
                </div>
                <div className='footer-body-item2'>
                      <h1>Hakkımızda</h1>
                      <div className='footer-about'>
                      <h3>Team Captain</h3>
                      <h3>Team Member</h3>
                      </div>
                </div>
                <div className='footer-body-item3'>
                     
                      <div className='footer-subscribe'>
                      <input placeholder='email'></input>
                      <button type='submit'>Abone Ol ! </button>
                      </div>
                </div>
                
        </div>
       
    </div>
  )
}

export default Footer