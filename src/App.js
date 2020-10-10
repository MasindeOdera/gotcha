import React from 'react';
import { connect } from 'react-redux';
import { useSelector } from 'react-redux';
import Login from './components/login';
import './App.css';

function App() {

  const state = useSelector((state) => state.repos);
  const login = state.loggedIn;
  console.log(state, login);

  return (
    <div className="App">
      { !login ? <Login /> : null }
    </div>
  );
}

export default connect(null)(App);
