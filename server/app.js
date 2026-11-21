const express = require("express");
const app = express();
require("dotenv").config();
const auth = require('./routes/auth')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/auth',auth)

app.get("/", (req, res) => {
    return res.json({ message: "Hello World" });
});

module.exports = app;