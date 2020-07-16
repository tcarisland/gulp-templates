import ISOGridConfig from './ISOGridConfig';
import ISOTile from './ISOTile';
import Color from '../interfaces/Color';

export default class ISOGrid {

    config: ISOGridConfig;
    tiles: ISOTile[][];
    active: ISOTile;

    constructor(config: ISOGridConfig) {
        this.config = config;
        this.tiles = []; 
        this.active = new ISOTile(3, 2.5, Color.WHITE);        
    }
    drawGrid(ctx: CanvasRenderingContext2D) {
        let boxColor: string;
        for(let a = 0; a < this.config.columns; a++) {
            this.tiles[a] = [];
            for(let b = 0; b < this.config.rows; b++) {
                this.tiles[a][b] = new ISOTile(a, b);
                this.tiles[a][b].render2D(ctx, this.config);
            }
        }
        this.active.render2D(ctx, this.config);
    }
}