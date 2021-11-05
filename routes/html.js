const express = require('express');
const path = require('path');

const htmlRouter = express.Router();

htmlRouter.get("/index", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

htmlRouter.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

htmlRouter.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

htmlRouter.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/404.html"));
}); 

module.exports = htmlRouter;