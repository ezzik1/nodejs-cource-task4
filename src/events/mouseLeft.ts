import * as robot from "robotjs";

export function mouseLeft(pixels:number) {
    const mousePos = robot.getMousePos()
    robot.moveMouse(mousePos.x-pixels<=0? mousePos.x: mousePos.x-pixels, mousePos.y)
    return
}