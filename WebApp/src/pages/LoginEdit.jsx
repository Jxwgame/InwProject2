import React from "react";
import '../pagesCss/styleLogin.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";

export default function LoginEdit(){
    return (
    <div className="LoginMain">
    <div className="backgroundLogin">
        <form action="">
            <h1>Sign in</h1>
            <div className="Login-input-box">
                <input type="text" placeholder="Username" required/>
                <div className="i"><FontAwesomeIcon icon={faUser}/></div> 
            </div>
            <div className="Login-input-box">
                <input type="password" placeholder="Password"required/>
                <div className="i"><FontAwesomeIcon icon={faLock}/></div>
            </div>
            <div className="remember-forgot">
                <label><input type="checkbox"/> Remeber me</label>
                <a href="#">Forgot password?</a>
            </div>
            <button type="submit" className="btnLogin">Login</button>

        </form>
    </div>
    </div>
    );
}