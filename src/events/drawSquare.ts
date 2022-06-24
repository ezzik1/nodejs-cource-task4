import * as robot from "robotjs";
robot.setMouseDelay(2)

export function drawSquare(pixels:number) {
    const mousePos = robot.getMousePos()
    robot.mouseToggle("down");
    robot.moveMouse(mousePos.x+pixels, mousePos.y);
    robot.moveMouse(mousePos.x+pixels, mousePos.y+pixels);
    robot.moveMouse(mousePos.x, mousePos.y+pixels);
    robot.moveMouse(mousePos.x, mousePos.y);
    robot.mouseToggle("up");
    return
}