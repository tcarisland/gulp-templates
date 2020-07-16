import React, { createRef } from 'react';
import './App.css';
import ISOCanvas from './components/ISOCanvas';
import ArrowsPreview from './components/ArrowsPreview';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ISOCanvas tileWidth={25} tileHeight={25} rows={25} columns={25} canvasRef={createRef()} />
        <ArrowsPreview side={130}/>
      </header>
    </div>
  );
}

export default App;
