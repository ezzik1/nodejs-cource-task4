import {WebSocket} from "ws";
import * as robot from "robotjs";


export function mousePosition(webSocket: WebSocket) {
    const mousePos = robot.getMousePos()
    return `mouse_position ${mousePos.x},${mousePos.y}`
}