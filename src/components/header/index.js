import React, { useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import logo from '../../images/logo.png';
import './styles.scss';

function Header() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.repos);
    const login = state.loggedIn;
    console.log(state, login);

    return (
        <div className="header">
            <h2>Title, logo & logout will be here</h2>
        </div>
    )
}

export default connect(null)(Header);
