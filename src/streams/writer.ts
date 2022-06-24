import {Writable} from 'stream'
import type {WebSocket} from 'ws'

export class Writer extends Writable {
    private ws: WebSocket;

    constructor(ws: WebSocket) {
        super();
        this.ws = ws
    }

    _write(chunk: any, encoding: BufferEncoding, callback: (error?: (Error | null)) => void): void {
        this.ws.send(chunk.toString())
        callback()
    }
}