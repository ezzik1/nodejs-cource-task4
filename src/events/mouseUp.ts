import * as robot from 'robotjs'

export function mouseUp(pixels:number) {
    const mousePos = robot.getMousePos()
    robot.moveMouse(mousePos.x,mousePos.y-pixels<=0? mousePos.y: mousePos.y-pixels)
    return
}