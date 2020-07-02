import React, { createRef } from 'react';
import logo from './logo.svg';
import './App.css';
import ISOCanvas from './components/ISOCanvas';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello, Thor!</h1>
        <ISOCanvas side={500} rows={20} columns={20} canvasRef={createRef()} />
      </header>
    </div>
  );
}

export default App;
