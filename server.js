require("dotenv/config");

const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user");


mongoose.connect(process.env.MONGO_URL, {
    user: process.env.MONGO_USER,
    pass: process.env.MONGO_PASS,
});


mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
    console.error(err);
});


const server = express();

server.use(express.json());

server.get("/", async (request, response) =>
{
    const users = await User.find({});
    response.send(users);
});

server.post("/", async (request, response) =>
{
    await User.create({
        name: request.body.name,
        email: request.body.email,
        password: request.body.password,
    });

    response.send("OK!");
});

server.listen(8080, () => "Server started!");
