import ISOGridConfig from "../model/ISOGridConfig";
import Color from "../interfaces/Color";

export interface ISOTileVertex {
    x: number,
    y: number
}

export class ISOTileVertices {
    nw: ISOTileVertex;
    ne: ISOTileVertex;
    se: ISOTileVertex;
    sw: ISOTileVertex;

    constructor(row: number, column: number, tileWidth: number, tileHeight: number) {
        this.nw = {x: column * tileWidth, y: row * tileHeight};
        this.ne = {x: (column * tileWidth) + tileWidth, y: row * tileHeight};
        this.se = {x: (column * tileWidth) + tileWidth, y: (row * tileHeight) + tileHeight};
        this.sw = {x: column * tileWidth, y: (row * tileHeight) + tileHeight};
    }

    public getVertices(): ISOTileVertex[] {
        return [ this.nw, this.ne, this.se, this.sw ];
    }
}

export default class ISOTile {
    row: number;
    column: number;
    color: Color;

    constructor(row: number, column: number, color?: Color) {
        this.row = row;
        this.column = column;
        this.color = color != undefined ? color : Color.BLACK;
    }

    public getColor(): string {
        if((this.row % 2 === 0 && this.column % 2 === 0) || (this.row % 2 === 1 && this.column % 2 === 1)) {
            return this.color.opaque(0.8).getRgbaString();
        } else {
            return this.color.opaque(0.3).getRgbaString();
        }
    }

    public create2DVertices(gridConfig: ISOGridConfig): ISOTileVertices {
        return new ISOTileVertices(this.row, this.column, gridConfig.getTileWidth(), gridConfig.getTileHeight());
    }

    private isoX(xc: number, yc: number, gridConfig: ISOGridConfig) {
        return ((xc - yc) / 2) + (gridConfig.width / 2);
    };
    private isoY(xc: number, yc: number, gridConfig: ISOGridConfig) {
        return ((xc + yc) / 4) + (gridConfig.height / 4);
    }

    public render2D(ctx: CanvasRenderingContext2D, gridConfig: ISOGridConfig) {
        ctx.beginPath();
        let v = this.create2DVertices(gridConfig);
        let vertices = v.getVertices();
        for(let _i = 0; _i < vertices.length; _i++) {
            let vertex = vertices[_i];
            ctx.lineTo(this.isoX(vertex.x, vertex.y, gridConfig), this.isoY(vertex.x, vertex.y, gridConfig));
        }
        ctx.fillStyle = this.getColor();
        ctx.fill();
    }
}