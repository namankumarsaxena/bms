
console.log("HTTP SERVER DATABASE_URL =", process.env.DATABASE_URL);


import {client} from "@repo/db/client"
import express from "express";



const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("hii there");
})

app.post("/signup", async (req, res) => {
    const username = req.body.username
    const password = req.body.password
    const user = await client.user.create({
        data: {
            username: username,
            password: password
        }
    })
    res.json({
        message: "Signup successfull",
        id: user.id
    });
})
app.listen(3002);