import React from 'react';
import { connect, useSelector } from 'react-redux';
import Login from './components/login';
import Header from './components/header';
import './App.css';

function App() {

  const state = useSelector((state) => state.repos);
  const login = state.loggedIn;
  console.log(state, login);

  return (
    <div className="App">
      { !login ?
        <Login /> :
        <Header />
      }
    </div>
  );
}

export default connect(null)(App);
