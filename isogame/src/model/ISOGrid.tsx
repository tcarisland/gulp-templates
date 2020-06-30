import ISORectangle from '../interfaces/ISORectangle';
import ISOGridConfig from '../interfaces/ISOGridConfig';

export default class ISOGrid {

    private gridConfig: ISOGridConfig;

    constructor(gridConfig: ISOGridConfig) {
        this.gridConfig = gridConfig;    }

    isoX(xc: number, yc: number) {
        return ((xc - yc) / 2) + (this.gridConfig.width / 2);
    };
    isoY(xc: number, yc: number) {
        return ((xc + yc) / 4) + (this.gridConfig.height / 4);
    }

    getBoxWidth() : number {
        return (this.gridConfig.width / this.gridConfig.columns);
    }

    getBoxHeight() : number {
        return (this.gridConfig.height / this.gridConfig.rows);
    }

    getISORectangles() : ISORectangle[][] {
        let rectangles : ISORectangle[][] = [];
        const boxW = this.getBoxWidth();
        const boxH = this.getBoxHeight();
        for(let _r = 0; _r < this.gridConfig.rows; _r++) {
            rectangles[_r] = [];
            for(let _c = 0; _c < this.gridConfig.columns; _c++) {
                rectangles[_r][_c] = {w: boxW, h: boxH, x: boxW * _c, y: boxH * _r};
            }
        }
        return rectangles;
    }

    drawBox(ctx : CanvasRenderingContext2D, r: ISORectangle, color: string) {
        ctx.beginPath();
        let pt: number[];
        pt = this.getA(r);
        ctx.moveTo(this.isoX(pt[0], pt[1]), this.isoY(pt[0], pt[1]));
        pt = this.getB(r);
        ctx.lineTo(this.isoX(pt[0], pt[1]), this.isoY(pt[0], pt[1]));
        pt = this.getC(r);
        ctx.lineTo(this.isoX(pt[0], pt[1]), this.isoY(pt[0], pt[1]));
        pt = this.getD(r);
        ctx.lineTo(this.isoX(pt[0], pt[1]), this.isoY(pt[0], pt[1]));
        ctx.fillStyle = color;
        ctx.fill();
    }

    getA(r: ISORectangle): number[] {
        return [r.x, r.y];
    }

    getB(r: ISORectangle): number[] {
        return [r.x + r.w, r.y];
    }
    getC(r: ISORectangle): number[] {
        return [r.x + r.w, r.y + r.h];
    }
    getD(r: ISORectangle): number[] {
        return [r.x, r.y + r.h];
    }

    drawISORectangles(ctx : CanvasRenderingContext2D ) {
        let rectangles = this.getISORectangles();
        let boxColor: string;
        let r: ISORectangle;
        for(let _r = 0; _r < rectangles.length; _r++) {
            for(let _c = 0; _c < rectangles[_r].length; _c++) {
                if((_r % 2 === 0 && _c % 2 === 0) || (_r % 2 === 1 && _c % 2 === 1)) {
                    boxColor = "rgba(255, 0, 0, 0.2)";
                } else {
                    boxColor = "rgba(0, 255, 0, 0.2)";
                }
                this.drawBox(ctx, r = rectangles[_r][_c], boxColor);
            }
        }
    }

}