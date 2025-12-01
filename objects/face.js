import { Square } from "./square.js";
import { Vertex } from "./vertex.js";

import { squareSize } from "../utils.js";

export class Face {
    #matrix;

    constructor(n, color, startPoint = [0, 0, 0]) {
        this.#matrix = this.buildMatrix(n, color, startPoint);
    }

    get squares() {
        return this.#matrix.flat();
    }

    buildMatrix(n, color, startPoint) {
        const matrix = [];
        const [ x, y, z ] = startPoint;

        for (let i = 0; i < n; i++) {
            matrix.push([]);
            for (let j = 0; j < n; j++) {
                matrix[i].push(new Square([
                    new Vertex(x + i * squareSize, y + j * squareSize, z),
                    new Vertex(x + (i + 1) * squareSize, y + j * squareSize, z),
                    new Vertex(x + (i + 1) * squareSize, y + (j + 1) * squareSize, z),
                    new Vertex(x + i * squareSize, y + (j + 1) * squareSize, z)
                ], color));
            }
        }

        return matrix;
    }

    rotate(center, angleX, angleY, angleZ) {
        this.#matrix.forEach(row => row.forEach(square => square.rotate(center, angleX, angleY, angleZ)));
    }

    translate(x, y, z) {
        this.#matrix.forEach(row => row.forEach(square => square.translate(x, y, z)));
    }
}
