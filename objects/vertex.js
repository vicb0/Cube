export class Vertex {
    #x;
    #y;
    #z;

    constructor(x, y, z) {
        this.#x = x;
        this.#y = y;
        this.#z = z;
    }

    get x() {
        return this.#x;
    }

    get y() {
        return this.#y;
    }

    get z() {
        return this.#z;
    }

    translate(x, y, z) {
        this.#x += x;
        this.#y += y;
        this.#z += z;
    }

    rotate(center, angleX, angleY, angleZ = 0) {
        // translate to origin
        const vx = this.#x - center.x;
        const vy = this.#y - center.y;
        const vz = this.#z - center.z;

        // rotate around Y
        const cosY = Math.cos(angleY);
        const sinY = Math.sin(angleY);
        const x1 = cosY * vx - sinY * vz;
        const z1 = sinY * vx + cosY * vz;

        // rotate around X
        const cosX = Math.cos(angleX);
        const sinX = Math.sin(angleX);
        const y2 = cosX * vy - sinX * z1;
        const z2 = sinX * vy + cosX * z1;
        let x2 = x1;

        // rotate around Z
        const cosZ = Math.cos(angleZ);
        const sinZ = Math.sin(angleZ);
        let x3 = cosZ * x2 - sinZ * y2;
        let y3 = sinZ * x2 + cosZ * y2;
        let z3 = z2;

        this.#x = center.x + x3;
        this.#y = center.y + y3;
        this.#z = center.z + z3;
    }
}
