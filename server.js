const express = require("express");
const app = express();
const { clog } = require('./middleware/clog');
const chalk = require('chalk');


let PORT = process.env.PORT || 3001;

// Routers
const noteRouter = require("./routes/notes");
const htmlRouter = require("./routes/html");

// custom console log middleware
app.use(clog);
// express data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use(noteRouter);
app.use(htmlRouter);

app.listen(PORT, () => console.log(chalk.magentaBright((`Server running on port ${PORT}`))));