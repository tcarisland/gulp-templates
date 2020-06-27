import React from 'react';
import './App.css';
import ISOCanvas from './ui/ISOCanvas';
import ArrowsPreview from './ui/ArrowsPreview';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <ISOCanvas side={400} canvasRef={React.createRef()} />
      <ArrowsPreview side={120}/>
      </header>
    </div>
  );
}

export default App;
