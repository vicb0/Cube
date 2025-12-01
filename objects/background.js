import { ctx, canvas } from '../instances.js'

export class Background {
    #color;
    #z;

    constructor(color) {
        this.#color = color;
        this.#z = -Infinity;
    }

    get z() {
        return this.#z;
    }

    draw() {
        ctx.fillStyle = this.#color;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
}
