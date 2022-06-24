import * as robot from "robotjs";
robot.setMouseDelay(0.01)

export function drawCircle(pixels:number) {
    const mousePos = robot.getMousePos()
    const normalize = (value:number,min:number,max:number):number => {
        return (value - min) / (max - min);
    }
    const interpolate = (normValue:number,min:number,max:number):number => {
        return min + (max - min) * normValue;
    }
    const mapVector = (value:number, min1:number, max1:number, min2:number, max2:number):number => {
        if (value < min1) {
            value = min1;
        }
        if (value > max1) {
            value = max1;
        }
        const res = interpolate(normalize(value, min1, max1), min2, max2);

        return res;
    }

    const origin = {
        x: mousePos.x,
        y: mousePos.y
    };
    robot.moveMouse(origin.x+pixels-1, origin.y);
    const r = pixels;
    let x, y;


    function updatePosition(deg:number) {
        const t = mapVector(deg, 0, 360, 0, 6.3);
        x = Math.floor(origin.x + (r * Math.cos(t)));
        y = Math.floor(origin.y + (r * Math.sin(t)));
        robot.mouseToggle("down");
        robot.moveMouse(x, y);
        robot.mouseToggle("up");
    }

    for (let i = 1; i < 360; i++) {
        updatePosition(i)
    }
    return
}