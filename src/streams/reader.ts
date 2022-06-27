import {Readable} from 'stream'
import type {RawData, WebSocket} from 'ws'

export class Reader extends Readable {
    private ws: WebSocket;

    constructor(ws: WebSocket) {
        super();
        this.ws = ws
    }

    _read(size: number): void {
        this.ws.once('message', (text) => {
            this.push(text)
        })
    }
}



