import ISOGridConfig from "../model/ISOGridConfig";

export interface ISOTileVertex {
    x: number,
    y: number
}

export interface ISOTileVertices {
    nw: ISOTileVertex,
    ne: ISOTileVertex,
    se: ISOTileVertex,
    sw: ISOTileVertex
}

export default class ISOTile {
    row: number;
    column: number;

    constructor(row: number, column: number) {
        this.row = row;
        this.column = column;
    }

    public getColor(): string {
        if((this.row % 2 === 0 && this.column % 2 === 0) || (this.row % 2 === 1 && this.column % 2 === 1)) {
            return "rgba(0, 255, 0, 0.3)";
        } else {
            return "rgba(0, 0, 255, 0.5)";
        }
    }

    public create2DVertices(gridConfig: ISOGridConfig): ISOTileVertices {
        let tileWidth = gridConfig.getTileWidth();
        let tileHeight = gridConfig.getTileHeight();
        return {
            nw : {x: this.column * tileWidth, y: this.row * tileHeight},
            ne: {x: (this.column * tileWidth) + tileWidth, y: this.row * tileHeight},
            se: {x: (this.column * tileWidth) + tileWidth, y: (this.row * tileHeight) + tileHeight},
            sw: {x: this.column * tileWidth, y: (this.row * tileHeight) + tileHeight}
        }
    }

    public render2D(ctx: CanvasRenderingContext2D, gridConfig: ISOGridConfig) {
        ctx.beginPath();
        let v = this.create2DVertices(gridConfig);
        ctx.moveTo(v.nw.x, v.nw.y);
        ctx.lineTo(v.ne.x, v.ne.y);
        ctx.lineTo(v.se.x, v.se.y);
        //ctx.lineTo(v.sw.x, v.sw.y);
        ctx.fillStyle = this.getColor();
        ctx.fill();
    }
}