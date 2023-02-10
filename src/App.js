import logo from './logo.svg';
import './App.css';
import User from './User'; 
import Header from './header';
import React, { useState } from 'react';
function App() {
  return (
    <div className="App">
      
     <User />
     <Header/>
    </div>
  );
}

export default App;
