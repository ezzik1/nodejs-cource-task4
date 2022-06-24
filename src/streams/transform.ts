import {Transform} from 'stream'
import type {TransformCallback} from 'stream'
import type {WebSocket} from 'ws'
import {messageParser} from "../helpers/messageParser";

export class Transformation extends Transform {
    private readonly ws: WebSocket;

    constructor(ws: WebSocket) {
        super();
        this.ws = ws
    }

    _transform(chunk: any, encoding: BufferEncoding, callback: TransformCallback) {
        this.pushedChunk(chunk.toString()).then(res => {
            this.push(Buffer.from(res))
            callback()
        })
    }

    pushedChunk(chunk:string):Promise<string> {
        return new Promise(async resolve => {
            const temp = await messageParser(chunk,this.ws)
            resolve(temp)
        })
    }
}