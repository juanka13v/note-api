const express = require('express');
const app = express();
const connectDB = require('./db/connect');
const tasksRoutes = require('./routes/task.route')
require('dotenv').config();

// middleware
app.use(express.json());

// routes

app.get("/", (req, res) => {
    res.send('<h1>Todo App</h1>')
})

app.use("/api/v1/tasks", tasksRoutes)


const port = 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`Server is listening on port ${port}...`))
    } catch (error) {
        console.log(error);
    }
}

start();