import { ctx } from '../instances.js'

import { outlineColor, outlineWidth } from '../consts.js';

export class Square {
    #vertices;
    #color;

    constructor(vertices, color) {
        this.#vertices = vertices;
        this.#color = color;
    }

    get z() {
        return this.#vertices.reduce((sum, curr) => sum + curr.z, 0) / this.#vertices.length;
    }

    draw() {
        ctx.fillStyle = this.#color;
        ctx.strokeStyle = outlineColor;
        ctx.lineWidth = outlineWidth;

        ctx.beginPath();
        ctx.moveTo(this.#vertices[0].x, this.#vertices[0].y);
        
        for (let i = 1; i < this.#vertices.length; i++) {
            ctx.lineTo(this.#vertices[i].x, this.#vertices[i].y);
        }
        
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    }

    rotate(center, angleX, angleY, angleZ) {
        this.#vertices.forEach(vertex => vertex.rotate(center, angleX, angleY, angleZ));
    }

    translate(x, y, z) {
        this.#vertices.forEach(vertex => vertex.translate(x, y, z));
    }
}
