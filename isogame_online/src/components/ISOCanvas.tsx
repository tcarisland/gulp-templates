import React from 'react';
import ISOCanvasProps from '../props/ISOCanvasProps';
import ISOCanvasConfig from '../model/ISOCanvasConfig';

class ISOCanvas extends React.Component<ISOCanvasProps> {
    componentDidMount() {
        console.log("ISOCanvas componentDidMount : " + this.props.side );
        let boxWidth = this.props.side / this.props.columns;
        let boxHeight = this.props.side / this.props.rows;
    }
    render() {
        return(
            <div> ISO Canvas
                <br></br>
                <canvas 
                    ref= { this.props.canvasRef }
                    width=  { this.props.side }
                    height= { this.props.side }
                    style={Object.assign({backgroundColor: "white"}, {display: "block"})}>                
                </canvas>
            </div>
        );
    }
};

export default ISOCanvas;