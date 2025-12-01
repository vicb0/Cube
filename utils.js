import { canvas } from "./instances.js";
import { cubeN } from "./consts.js";

export const degreesToRadians = (degrees) => {
    return degrees * Math.PI / 180;
}

export const squareSize = Math.min(canvas.width, canvas.height) / (cubeN * 1.75);
