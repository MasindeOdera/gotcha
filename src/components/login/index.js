import React from 'react';
import logo from '../../images/logo.png';
import './styles.scss';

const Login = () => {

    const handleChangeEvents = () => {
    //handle change events
    };

    const handleSubmitevents = () => {
    // handle submit events
    };

    const handlePasswordChange = () => {
    //handle password change events
    };

    return (
        <div className="login" data-test="loginComponent">
            <form onSubmit={handleSubmitevents}>
                <img src={logo} alt="logo" data-test="loginLogo" width="60" height="60" />
                <h1>Gotcha</h1>
                <div className="email" data-test="loginEmail">
                    <label>Email:</label>
                    <input type="email" data-test="email" placeholder="Email" onChange={handleChangeEvents} />
                </div>
                <div className="password" data-test="loginPassword">
                    <label>Password:</label>
                    <input type="password" data-test="password" placeholder="Password" onChange={handlePasswordChange} />
                </div>
            <input type="submit" value="Login" data-test="loginSubmit" />
            </form>
        </div>
    )
}

export default Login;