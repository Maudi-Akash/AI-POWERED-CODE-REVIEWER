const express = require('express');
const aiRoutes = require("./routes/ai.routes")
const cors = require("cors")

const app = express();

app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:5174"], // allow both ports
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"]
}));


app.use(express.json());

app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>');
})

app.use("/ai", aiRoutes)

module.exports = app;