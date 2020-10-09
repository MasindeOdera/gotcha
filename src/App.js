import React from 'react';
import Login from './components/login';
import logo from './images/logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <Login />
      <h3>Gotcha!</h3>
      <img src={logo} alt="logo" width="80" height="80" />
    </div>
  );
}

export default App;
