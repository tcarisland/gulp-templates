import React from 'react';
import KeyPressEventQueue from '../events/KeyPressEventQueue';
import ArrowKeyPress from '../interfaces/ArrowKeyPress';

interface ISOCanvasProps {
  side: number;
  canvasRef: any;
}

const zeroPad = (num: number, places: number) => String(num).padStart(places, '0');
let rectX = 20;
let rectY = 20;
const velocity = 20;

class ISOCanvas extends React.Component<ISOCanvasProps> {
  
    componentDidMount() {
      console.log(this.props.canvasRef);
      const ctx = this.props.canvasRef.current.getContext("2d");
      ctx.beginPath();
      ctx.rect(rectX, rectY, 150, 100);
      ctx.stroke();
      let width = this.props.side;
      let height = this.props.side;
      let eventHandler = function(keyPress: ArrowKeyPress) {
        let direction = zeroPad(parseInt(keyPress.dir.toString(2)), 4);
        let rY = rectY + (-1 * parseInt(direction.substring(0, 1)) + parseInt(direction.substring(1, 2))) * velocity;
        let rX = rectX + (-1 * parseInt(direction.substring(2, 3)) + parseInt(direction.substring(3, 4))) * velocity;
        rectX = ((rX + 150) < (width + velocity) && rX >= 0) ? rX : rectX;
        rectY = ((rY + 100) < (height + velocity) && rY >= 0) ? rY : rectY;
        ctx.clearRect(0, 0, width, height);
        ctx.beginPath();
        ctx.rect(rectX, rectY, 150, 100);
        ctx.stroke();

      }
      KeyPressEventQueue.getInstance().addEventListener({ source: this, run: eventHandler });
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