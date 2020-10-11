import React from 'react';
import { connect, useSelector } from 'react-redux';
import Login from './components/login';
import Header from './components/header';
import Searchbar from './components/searchBar';
import Results from './components/results';
import './App.css';

function App() {

  const state = useSelector((state) => state.repos);
  const login = state.loggedIn;

  return (
    <div className="App">
      { !login ? <Login /> : null}
      { login ? <Header />  : null}
      { login ? <Searchbar />: null} 
      { login ? <Results /> : null} 
    </div>
  );
}

export default connect(null)(App);
