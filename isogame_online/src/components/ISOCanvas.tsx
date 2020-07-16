import React from 'react';
import ISOGridConfig from '../model/ISOGridConfig';
import ISOGrid from '../model/ISOGrid';
import ISOTile from '../model/ISOTile';

export interface ISOCanvasProps {
    canvasRef: any,
    rows: number,
    columns: number,
    tileWidth: number,
    tileHeight: number
}

class ISOCanvas extends React.Component<ISOCanvasProps> {
    componentDidMount() {
        let width = this.getWorldWidth();
        let height = this.getWorldHeight();
        let grid = new ISOGrid(new ISOGridConfig(this.props.rows, this.props.columns, width, height));
        let ctx = this.props.canvasRef.current.getContext("2d");
        grid.drawGrid(ctx);
        let active: ISOTile;
        active = grid.active;
    }
    getWorldWidth(): number {
        return this.props.tileWidth * this.props.columns;        
    }
    getWorldHeight(): number {
        return this.props.tileHeight * this.props.rows;
    }
    getCanvasHeight(): number {
        return this.getWorldHeight();
    }
    render() {
        return(
            <div>
                <canvas 
                    ref= { this.props.canvasRef }
                    width=  { this.getWorldWidth() }
                    height= { this.getCanvasHeight() }
                    style={Object.assign({backgroundColor: "white"}, {display: "block"})}>                
                </canvas>
            </div>
        );
    }
};

export default ISOCanvas;