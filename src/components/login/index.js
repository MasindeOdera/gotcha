import React, { useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import logo from '../../images/logo.png';
import './styles.scss';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    console.log(state);

    console.log(loggedIn);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email: ", email);
        console.log("Password: ", password);

        var data = JSON.stringify({
            "email": email,
            "password": password                                                  
        });

        var xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                const authenticated = this.responseText[2];
                // If the responseText has 'auth_token', then the credentials were accepted.
                if (authenticated === 'a') {
                    setLoggedIn(true);
                    dispatch({type:"LOGIN_STATUS", payload: true});
                }
                else {
                    setLoggedIn(false);
                }
            }

        });

        xhr.open("POST", "https://arcane-scrubland-64110.herokuapp.com/auth/login");
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.send(data);
    };

    // fetch("https://opendata.rdw.nl/resource/m9d7-ebf2.json")
    //     .then(res => res.json())
    //     .then(res => {
    //         console.log({res});
    //     })
    //     .catch(error => {
    //         console.error({error});
    //     });

    return (
        <div className="login" data-test="loginComponent">
            <form onSubmit={handleSubmit}>
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
                <input type="submit" value="Login" data-test="loginSubmit" />
            </form>
        </div>
    )
}

export default connect(null)(Login);