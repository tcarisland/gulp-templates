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

    public create2DVertices(tileWidth: number, tileHeight: number): ISOTileVertices {
        return {
            nw : {x: this.column * tileWidth, y: this.row * tileHeight},
            ne: {x: (this.column * tileWidth) + tileWidth, y: this.row * tileHeight},
            se: {x: (this.column * tileWidth) + tileWidth, y: (this.row * tileHeight) + tileHeight},
            sw: {x: this.column * tileWidth, y: (this.row * tileHeight) + tileHeight}
        }
    }

    public render2D(ctx: CanvasRenderingContext2D, tileWidth: number, tileHeight: number) {
        ctx.beginPath();
    }
}