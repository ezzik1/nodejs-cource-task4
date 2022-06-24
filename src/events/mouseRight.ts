import * as robot from 'robotjs'
const screenSize = robot.getScreenSize()

export function mouseRight(pixels:number) {
    const mousePos = robot.getMousePos()
    robot.moveMouse(mousePos.x+pixels>screenSize.width? screenSize.width: mousePos.x+pixels, mousePos.y)
}