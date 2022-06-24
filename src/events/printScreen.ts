import {WebSocket} from "ws";
import * as robot from "robotjs";
import Jimp from "jimp";


export function printScreen(webSocket: WebSocket):Promise<string> {
    const mousePos = robot.getMousePos()
    const screenCaptureToFile2 = (robotScreenPic:robot.Bitmap) => {
        return new Promise(async (resolve) => {
            try {
                const image = new Jimp(robotScreenPic.width, robotScreenPic.height);
                let pos = 0;
                image.scan(0, 0, image.bitmap.width, image.bitmap.height, (x, y, idx) => {
                    image.bitmap.data[idx + 2] = robotScreenPic.image.readUInt8(pos++);
                    image.bitmap.data[idx + 1] = robotScreenPic.image.readUInt8(pos++);
                    image.bitmap.data[idx + 0] = robotScreenPic.image.readUInt8(pos++);
                    image.bitmap.data[idx + 3] = robotScreenPic.image.readUInt8(pos++);
                });
                const res = await image.getBase64Async((Jimp.MIME_PNG))
                resolve(res.split(',')[1])
            } catch (e) {
                console.error(e);
            }
        });
    }

    const pic = robot.screen.capture(mousePos.x-100,mousePos.y-100,200,200);
    const returnBase64 = async (): Promise<string> => {
        const str = await new Promise<string>(resolve => {
            screenCaptureToFile2(pic).then((res) => {
                resolve(`prnt_scrn ${res}`);
            })
        })
        return str
    }
    const ret = returnBase64()
    return ret
}