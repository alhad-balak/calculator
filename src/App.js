import logo from './logo.svg';
import './App.css';
import Calculator from './components/Calculator';
import { useState } from 'react';
import Background from './components/Background';

function App() {
  return (
    <div className="App">
      <Background id='bg'/>
      <Calculator id='main-app'/>
    </div>
  );
}

export default App;
