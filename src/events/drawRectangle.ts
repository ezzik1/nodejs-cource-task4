import * as robot from "robotjs";
robot.setMouseDelay(2)

export function drawRectangle(pixel1:number, pixel2:number) {
    const mousePos = robot.getMousePos()
    robot.mouseToggle("down");
    robot.moveMouse(mousePos.x+pixel1, mousePos.y);
    robot.moveMouse(mousePos.x+pixel1, mousePos.y+pixel2);
    robot.moveMouse(mousePos.x, mousePos.y+pixel2);
    robot.moveMouse(mousePos.x, mousePos.y);
    robot.mouseToggle("up");
    return
}