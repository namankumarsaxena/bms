import { WebSocketServer } from "ws";
import {client} from "@repo/db/client"

const server = new WebSocketServer({
    port: 3001
});

server.on("connection", async (socket) => {
    console.log("Client connected");

    try {
        const user = await client.user.create({
            data: {
                username: Math.random().toString(),
                password: Math.random().toString()
            }
        });

        console.log(user);
        socket.send("User created");
    } catch (e) {
        console.error(e);
    }
    socket.send("Hii there you are connected to the server")
});

