import { canvasId, width, height } from './consts.js'

export const canvas = document.getElementById(canvasId);
canvas.width = width;
canvas.height = height;

export const ctx = canvas.getContext('2d');
export const toDraw = [];
