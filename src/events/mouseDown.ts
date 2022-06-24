import * as robot from "robotjs";
const screenSize = robot.getScreenSize()

export function mouseDown(pixels:number) {
    const mousePos = robot.getMousePos()
    robot.moveMouse(mousePos.x,mousePos.y+pixels>screenSize.height? screenSize.height: mousePos.y+pixels)
    return
}