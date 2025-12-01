import { Face } from "./face.js";

import { degreesToRadians, squareSize } from "../utils.js";
import { cubeN } from "../consts.js";

export class Cube {
    #center;
    #startPoint;
    #faces;

    constructor() {
        this.#center = { x: canvas.width / 2, y: canvas.height / 2, z: 0 };
        this.#startPoint = [this.#center.x - cubeN * squareSize / 2, this.#center.y - cubeN * squareSize / 2, 0];
        this.#init();
    }

    #init() {
        this.#faces = [];
        
        const colors = {
            'green': { angleX: 0, angleY: 0, translateX: 0, translateY: 0, translateZ: 0 },
            'white': { angleX: degreesToRadians(90), angleY: 0, translateX: 0, translateY: -squareSize * (cubeN / 2), translateZ: -squareSize * (cubeN / 2) },
            'yellow': { angleX: degreesToRadians(90), angleY: 0, translateX: 0, translateY: squareSize * (cubeN / 2), translateZ: -squareSize * (cubeN / 2) },
            'blue': { angleX: 0, angleY: 0, translateX: 0, translateY: 0, translateZ: -squareSize * cubeN },
            'red': { angleX: 0, angleY: degreesToRadians(90), translateX: squareSize * (cubeN / 2), translateY: 0, translateZ: -squareSize * (cubeN / 2) },
            'orange': { angleX: 0, angleY: degreesToRadians(90), translateX: -squareSize * (cubeN / 2), translateY: 0, translateZ: -squareSize * (cubeN / 2) },
        };

        for (const color in colors) {
            const face = new Face(cubeN, color, this.#startPoint);
            face.rotate(this.#center, colors[color].angleX, colors[color].angleY);
            face.translate(colors[color].translateX, colors[color].translateY, colors[color].translateZ);
            this.#faces.push(face);
        }

        this.translate(0, 0, squareSize * cubeN / 2);
        this.rotate(degreesToRadians(-15), degreesToRadians(45));
    }

    get squares() {
        return this.#faces.flatMap(face => face.squares);
    }

    rotate(angleX, angleY) {
        this.#faces.forEach(face => face.rotate(this.#center, angleX, angleY));
    }

    translate(x, y, z) {
        this.#faces.forEach(face => face.translate(x, y, z));
    }

    reset() {
        this.#init();
    }
}
