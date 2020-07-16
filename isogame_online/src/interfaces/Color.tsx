export default class Color {
    r: number;
    g: number;
    b: number;
    alpha: number;
    public static BLACK = new Color(0, 0, 0, 1);
    public static WHITE = new Color(255, 255, 255, 1);

    constructor(r: number, g: number, b: number, alpha?: number) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.alpha = alpha != undefined ? alpha : 1;
    }

    public opaque(alpha: number): Color {
        return new Color(this.r, this.g, this.b, alpha);
    }

    getRgbaString(): string {
        return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.alpha})`;
    }

}