import ISOGridConfig from './ISOGridConfig';

export default class ISOGrid {

    config: ISOGridConfig;

    constructor(config: ISOGridConfig) {
        this.config = config;
    }

    getTileWidth(): number {
        return this.config.width / this.config.columns;
    }

    getTileHeight(): number {
        return this.config.height / this.config.rows;
    }

    drawGrid(ctx: CanvasRenderingContext2D) {
        let boxColor: string;
        for(let a = 0; a < this.config.columns; a++) {
            for(let b = 0; b < this.config.rows; b++) {
                ctx.beginPath();
                ctx.rect(a * this.getTileWidth(), b * this.getTileHeight(), this.getTileWidth(), this.getTileHeight());                
                if((a % 2 === 0 && b % 2 === 0) || (a % 2 === 1 && b % 2 === 1)) {
                    boxColor = "rgba(0, 0, 0, 0.3)";
                } else {
                    boxColor = "rgba(0, 0, 0, 0.1)";
                }
                ctx.fillStyle = boxColor;
                ctx.fill();
            }
        }       
    }
}