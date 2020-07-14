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
}