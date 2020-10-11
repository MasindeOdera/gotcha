import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Image } from 'semantic-ui-react';
import logo from '../../images/logo.png';
import './styles.scss';

function Header() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.repos);
    const login = state.loggedIn;
    console.log(state, login);

    const logout = () => {
        dispatch({type:"LOGIN_STATUS", payload: false});
    };

    return (
        <div className="titleHead" data-test="headerComponent">
            <Image className="companyLogo" src={logo} alt="logo" data-test="headerLogo" floated='left' size='tiny' />
            <h2 data-test="headerCompanyName">Gotcha</h2>
            <button className="logout" onClick={logout} data-test="logout">Logout</button>
        </div>
    )
}

export default connect(null)(Header);
