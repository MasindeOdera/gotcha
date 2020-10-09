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
        <div className="login">
            <form onSubmit={handleSubmitevents}>
                <img src={logo} alt="logo" width="60" height="60" />
                <h1>Gotcha</h1>
                <div className="email">
                    <label>Email:</label>
                    <input type="text" data-test="email" defaultValue="Email" onChange={handleChangeEvents} />
                </div>
                <div className="password">
                    <label>Password:</label>
                    <input type="password" data-test="password" defaultValue="Password" onChange={handlePasswordChange} />
                </div>
            <input type="submit" value="Login" data-test="submit" />
            </form>
        </div>
    )
}

export default Login;