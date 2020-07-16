import React, { createRef } from 'react';
import './App.css';
import ISOCanvas from './components/ISOCanvas';
import ArrowsPreview from './components/ArrowsPreview';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ISOCanvas tileWidth={50} tileHeight={50} rows={11} columns={11} canvasRef={createRef()} />
        <ArrowsPreview side={130}/>
      </header>
    </div>
  );
}

export default App;
