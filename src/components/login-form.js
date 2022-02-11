import React from "react";
import UsernameTextbox from "./username-textbox";
import PasswordTextbox from "./password-textbox";
import LoginButton from "./login-button";

export default class LoginForm extends React.Component{
    render(){
        return (
        <div className="Login">
            <h3>Login</h3>
            <UsernameTextbox/>
            <br/>
            <PasswordTextbox/>
            <br/>
            <LoginButton/>
        </div>
        )
    }
}