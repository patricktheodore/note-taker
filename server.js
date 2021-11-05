const express = require("express");
const app = express();

let PORT = process.env.PORT || 3001;

// Routers
const noteRouter = require("./routes/notes");
const htmlRouter = require("./routes/html");

// express data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use(noteRouter);
app.use(htmlRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));