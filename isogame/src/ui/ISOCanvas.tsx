import React from 'react';

interface ISOCanvasProps {
  side: number;
  canvasRef: any;
}

class ISOCanvas extends React.Component<ISOCanvasProps> {
  
    componentDidMount() {
      console.log(this.props.canvasRef);
      const ctx = this.props.canvasRef.current.getContext("2d");
      ctx.beginPath();
      ctx.rect(20, 20, 150, 100);
      ctx.stroke();
    }
    render() {
      return(
        <canvas 
          ref={ this.props.canvasRef }
          width={this.props.side} 
          height={this.props.side}
          style={Object.assign({border: "1px solid black"}, {backgroundColor: "white"})}>
          </canvas>
        );
    }
};

export default ISOCanvas;