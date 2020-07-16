import React from 'react';
import ISOGridConfig from '../model/ISOGridConfig';
import ISOGrid from '../model/ISOGrid';

export interface ISOCanvasProps {
    side: number,
    canvasRef: any,
    rows: number,
    columns: number
}

class ISOCanvas extends React.Component<ISOCanvasProps> {
    componentDidMount() {
        console.log("ISOCanvas componentDidMount : " + this.props.side );
        console.log("canvas ref : " + this.props.canvasRef);
        let boxWidth = this.props.side / this.props.columns;
        let boxHeight = this.props.side / this.props.rows;
        let grid = new ISOGrid(new ISOGridConfig(this.props.rows, this.props.columns, this.props.side, this.props.side));
        let ctx = this.props.canvasRef.current.getContext("2d");
        grid.drawGrid(ctx);
    }
    render() {
        return(
            <div>
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