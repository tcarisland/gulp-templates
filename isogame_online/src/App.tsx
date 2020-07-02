import React from 'react';
import logo from './logo.svg';
import './App.css';
import ISOCanvas from './components/ISOCanvas';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello, Thor!</h1>
        <ISOCanvas></ISOCanvas>
      </header>
    </div>
  );
}

export default App;
