import { Background } from './objects/background.js'
import { Cube } from './objects/cube.js'

import { canvas, toDraw, ctx } from './instances.js'
import { backgroundColor, sensitivity } from './consts.js'

const cube = new Cube();

const init = () => {
    toDraw.length = 0;
    toDraw.push(new Background(backgroundColor));
    toDraw.push(...cube.squares);
    redraw();
}

export const redraw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    toDraw.sort((a, b) => a.z - b.z);
    toDraw.forEach(obj => obj.draw());
}

const main = () => {
    init();

    canvas.addEventListener('mousemove', evt => {
        if (evt.buttons !== 1) return;

        // horizontal motion moves around the Y axis
        const angleY = -evt.movementX * sensitivity;
        // vertical motion moves around the X axis
        const angleX = -evt.movementY * sensitivity;

        cube.rotate(angleX, angleY);
        redraw();
    });

    document.getElementById('reset').addEventListener('click', () => {
        cube.reset();
        init();
    });
}

if (typeof window !== 'undefined') {
    window.onload = main;
}
