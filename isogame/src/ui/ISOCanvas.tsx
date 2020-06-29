import React from 'react';
import KeyPressEventQueue from '../events/KeyPressEventQueue';
import ArrowKeyPress from '../interfaces/ArrowKeyPress';
import ISORectangle from '../interfaces/ISORectangle';
import KeyPressType from '../enums/KeyPressType';

interface ISOCanvasProps {
  side: number;
  canvasRef: any;
}

const zeroPad = (num: number, places: number) => String(num).padStart(places, '0');
let rect: ISORectangle = { x: 25, y: 25, w: 25, h: 25 }
let rects: ISORectangle[];
const velocity = 25;

class ISOCanvas extends React.Component<ISOCanvasProps> {
  
    componentDidMount() {
      rects = [];
      const ctx = this.props.canvasRef.current.getContext("2d");      
      ctx.beginPath();
      ctx.rect(rect.x, rect.y, rect.w, rect.h);
      ctx.stroke();
      let width = this.props.side;
      let height = this.props.side;
      let eventHandler = function(keyPress: ArrowKeyPress) {
        switch(keyPress.type) {
          case KeyPressType.ARROW:
            let direction = zeroPad(parseInt(keyPress.dir.toString(2)), 4);        
            let rY = rect.y + (-1 * parseInt(direction.substring(0, 1)) + parseInt(direction.substring(1, 2))) * velocity;
            let rX = rect.x + (-1 * parseInt(direction.substring(2, 3)) + parseInt(direction.substring(3, 4))) * velocity;
            rect.y = ((rY + rect.h) < (height + velocity) && rY >= 0) ? rY : rect.y;
            rect.x = ((rX + rect.w) < (width + velocity) && rX >= 0) ? rX : rect.x;
            ctx.clearRect(0, 0, width, height);
            ctx.beginPath();
            ctx.rect(rect.x, rect.y, rect.w, rect.h);
            ctx.stroke();
            rects.forEach(r => {
              ctx.beginPath();
              ctx.rect(r.x, r.y, r.w, r.h);
              ctx.fillStyle = "rgba(0, 0, 0, 0.1)"
              ctx.fill();
            });
            break;
          case KeyPressType.SPACE:
            let overlap = false;
            rects.push(Object.assign({}, rect));
            ctx.clearRect(0, 0, width, height);
            rects.forEach(r => {
              ctx.beginPath();
              ctx.rect(r.x, r.y, r.w, r.h);
              ctx.fillStyle = "rgba(0, 0, 0, 0.1)"
              ctx.fill();
            });
            break;
        }
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