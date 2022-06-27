import {
    drawCircle,
    drawRectangle,
    drawSquare,
    mouseDown,
    mouseLeft,
    mousePosition,
    mouseRight,
    mouseUp, printScreen
} from "../events";
import type {WebSocket} from 'ws'


export function messageParser(text: string, ws: WebSocket):string|Promise<string> {
    const [command, pixel, pixel2] = text.split(' ')
    switch (command) {
        case 'mouse_right':
            mouseRight(Number(pixel))
            return text+'\\0'
        case 'mouse_left':
            mouseLeft(Number(pixel))
            return text+'\\0'
        case 'mouse_up':
            mouseUp(Number(pixel))
            return text+'\\0'
        case 'mouse_down':
            mouseDown(Number(pixel))
            return text+'\\0'
        case 'draw_circle':
            drawCircle(Number(pixel))
            return text+'\\0'
        case 'draw_square':
            drawSquare(Number(pixel))
            return text+'\\0'
        case 'draw_rectangle':
            drawRectangle(Number(pixel), Number(pixel2))
            return text+'\\0'
        case 'mouse_position':
            return mousePosition(ws)
        case 'prnt_scrn':
            return printScreen(ws)
        default:
            return text+'\\0'
    }
}