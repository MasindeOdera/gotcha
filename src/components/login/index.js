import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import logo from '../../images/logo.png';
import './styles.scss';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState('Login');

    const dispatch = useDispatch();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        //Let user know that an action was taken.
        setLogin('Loading...');

        var data = JSON.stringify({
            "email": email,
            "password": password                                                  
        });

        var xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                let authentication = this.responseText;
                const authenticated = this.responseText[2];
                // If the responseText has 'auth_token', then the credentials were accepted.
                if (authenticated === 'a') {
                    dispatch({type:"LOGIN_STATUS", payload: true});
                    dispatch({type:"SAVE_AUTHENTICATION", payload: authentication});
                }
                else {
                    alert("Incorrect Email/Password, please try again");
                    setEmail('');
                    setPassword('');
                    setLogin('Login');
                }
            }

        });

        xhr.open("POST", "https://arcane-scrubland-64110.herokuapp.com/auth/login");
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.send(data);
    };

    return (
        <div className="login" data-test="loginComponent">
            <form className="loginForm" onSubmit={handleSubmit}>
                <img src={logo} alt="logo" data-test="loginLogo" width="60" height="60" />
                <h1>Gotcha</h1>
                <div className="email">
                    <label>Email:</label>
                    <input type="email" data-test="loginEmail" placeholder="Email" onChange={handleEmailChange} />
                </div>
                <div className="password">
                    <label>Password:</label>
                    <input type="password" data-test="loginPassword" placeholder="Password" onChange={handlePasswordChange} required/>
                </div>
                <input type="submit" value={login} data-test="loginSubmit" />
            </form>
        </div>
    )
}

export default connect(null)(Login);