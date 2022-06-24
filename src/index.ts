import 'dotenv/config'
import {WebSocketServer} from 'ws'
import {Reader,Transformation,Writer} from './streams'

const PORT = Number(process.env.PORT ? process.env.PORT : 8080)
const wsserver = new WebSocketServer({port: PORT, host: 'localhost'})

console.log(`WebSocketServer started on ws://localhost:${PORT}`)


wsserver.on('connection', (wss) => {
    const reader = new Reader(wss)
    const writer = new Writer(wss)
    const transform = new Transformation(wss)

    reader.pipe(transform).pipe(writer)
})
