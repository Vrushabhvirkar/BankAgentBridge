const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = require("./App");

// DB Connection
const DBConnectionHandler = require("./Utils/DBconnect");
DBConnectionHandler();

const _dirname = path.resolve();
const port = process.env.PORT || 3000;



// Serve static files
app.use(express.static(path.join(__dirname, "/frontend/dist")));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
});

// 404 Error handler
app.use("*", (req, res) => {
    res.status(404).json({ message: "Not Found" });
});

// Error-Handling Middleware
app.use((err, req, res, next) => {
    if (res.headersSent) {
        next(new Error("There was a problem"));
    } else {
        if (err.message) {
            res.status(err.status || 500).send(err.message);
        } else {
            res.status(500).send("Something went wrong");
        }
    }
});

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});
